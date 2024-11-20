import { ColumnMode } from "@swimlane/ngx-datatable";

import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import Swal from "sweetalert2";
import { NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import { FromMouvement } from "../../models/FromMouvement";
import { TripImputation } from "../../models/TripImputation";
import { VehiculeRoute } from "../../models/vehicule-route";
import { Affaire } from "../../models/affaire.model";
import { Fournisseur } from "../../models/fournisseur";
import { VehiculeRouteService } from "../vehicule-route.service";
import { AffaireService } from "../../affaire/affaire.service";
import { FournisseurService } from "../../fournisseur/fournisseur.service";
import { AssociateFromToRequestDTO } from "../../models/DTO/AssociateFromToRequestDTO";
import { UpdateFillingPercentageDTO } from "../../models/DTO/UpdateFillingPercentageDTO";
import { UpdateMouvementDTO } from "../../models/DTO/UpdateMouvementDTO";
import { TripImputationRequestDTO } from "../../models/DTO/TripImputationRequestDTO";
import { Client } from "../../models/client";
import { Lot } from "../../models/lot";
import { Soustraitant } from "../../models/soustraitant";
import { TripImputationResponseDTO } from "../../models/DTO/TripImputationResponseDTO";
import { FromMouvementResponseDTO } from "../../models/DTO/FromMouvementResponseDTO";
import { FromMouvementRequestDTO } from "../../models/DTO/FromMouvementRequestDTO";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface AssociateRequest {
  fromMouvements: FromMouvement[];
  toAffaireId: number;
  //  imputations: TripImputation[];
}

export function fromMouvementValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const fournisseurs = control.get("fournisseurs")?.value;
    const affaire = control.get("affaire")?.value;

    if (
      fournisseurs &&
      fournisseurs.length > 0 &&
      affaire &&
      affaire.length > 0
    ) {
      return { bothProvided: true };
    }
    if (!fournisseurs && !affaire) {
      return { noneProvided: true };
    }

    return null;
  };
}

@Component({
  selector: "app-vehicule-mouvement-list",
  templateUrl: "./vehicule-mouvement-list.component.html",
  styleUrls: ["./vehicule-mouvement-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class VehiculeMouvementListComponent implements OnInit {
  public ColumnMode = ColumnMode;

  private _unsubscribeAll: Subject<any>;

  selectedRow: any = null;
  selectedFile: File | null = null;
  clients: Client[] = [];
  lots: Lot[] = [];
  soustraitants: Soustraitant[] = [];
  //-------------------------------------------------------
  vehiculeRoutes: VehiculeRoute[] = [];
  filteredRoutes: VehiculeRoute[] = [];
  fromMouvements: FromMouvementResponseDTO[] = [];
  affaires: Affaire[] = [];
  fournisseurs: Fournisseur[] = [];
  toAffaireId: number | null = null;
  selectedVehiculeRoute: VehiculeRoute | null = null;
  filterDate?: string;
  filterVehiculeName: string = "";
  // Define a map to track disabled states for each fromMouvement
  disabledStates: {
    [key: number]: { disableFournisseur: boolean; disableAffaire: boolean };
  } = {};
  //--------------------------------------------
  vehiculeRouteId: number | undefined;
  imputations: TripImputationResponseDTO[] = [];

  //-----------------------------------------------
  filterType: string = "";
  rows: VehiculeRoute[] = [];

  tripImputationResponseDTO: TripImputationResponseDTO = {
    id: null,
    affaireId: null,
    fillingPercentage: 0,
    observation: "",
    client: null,
    lot: null,
    subContractorId: null,
    costImputation: null,
    affaireCode: "",
    subContractorFullName: "",
  };
  fromMouvementResponseDTO: FromMouvementResponseDTO = {
    id: 0,
    vehiculeRouteId: null,
    affaireId: null,
    affaireCode: "",
    fournisseurId: null,
    fournisseurName: "",
    bl: "",
    blMontant: 0,
    dateBl: new Date(),
  };

  currentFromMouvement: FromMouvementResponseDTO;
  isFournisseurDisabled: boolean = false;
  isAffaireDisabled: boolean = false;

  @ViewChild("addImputationModal") addImputationModal: TemplateRef<any>;
  @ViewChild("editeImputationModal") editeImputationModal: TemplateRef<any>;
  @ViewChild("addFromMouvementModal") addFromMouvementModal: TemplateRef<any>;
  @ViewChild("editeFromMouvementModal")
  editeFromMouvementModal: TemplateRef<any>;

  ngbDateBl: NgbDateStruct;

  constructor(
    private vehiculeRouteService: VehiculeRouteService,
    private affaireService: AffaireService,
    private fournisseurService: FournisseurService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.loadRoutes();
    this.loadAffaires();
    this.loadFournisseurs();
    this.filterData();
    this.fetchClients();
    this.fetchLots();

    /* 'I am learning Web Dev'
             .split(' ')
             .map(s=>
                 s[0].toUpperCase()
                 + s.slice(1).toLowerCase())
             .join(' ')*/

    this.vehiculeRouteService.onImputationsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((imputations) => {
        if (imputations) {
          this.imputations = imputations;
        } else {
          this.imputations = [];
        }
      });

    this.vehiculeRouteService.onFromMouvementChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((fromMouvements) => {
        if (fromMouvements) {
          this.fromMouvements = fromMouvements;
        } else {
          this.fromMouvements = [];
        }
      });
  }

  filterData(filterType: string = ""): void {
    // Update filterType before applying filters
    this.filterType = filterType;

    this.filteredRoutes = this.vehiculeRoutes.filter((route) => {
      const matchesDate = this.filterDate
        ? new Date(route.date!).toISOString().split("T")[0] === this.filterDate
        : true;

      const matchesVehiculeName = this.filterVehiculeName
        ? route.vehiculeGpsLocation?.name
            ?.toLowerCase()
            .includes(this.filterVehiculeName.toLowerCase())
        : true;

      // Apply filter based on type only if filterType is set
      // const matchesType = this.filterType
      //   ? route.vehiculeGpsLocation?.groupName === this.filterType
      //   : true;

      return matchesDate && matchesVehiculeName;
    });
  }

  fetchClients(): void {
    this.vehiculeRouteService.getAllClients().then((data: Client[]) => {
      this.clients = data;
      console.log("Clients:", this.clients);
    });
  }

  fetchLots(): void {
    this.vehiculeRouteService.getAllLots().then((data: Lot[]) => {
      this.lots = data;
      console.log("Lots:", this.lots);
    });
  }

  loadRoutes(): void {
    this.vehiculeRouteService.onMouvementsListChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (routes) => {
          this.vehiculeRoutes = Array.isArray(routes)
            ? routes.map((route) => ({
                ...route,
                isEditing: false, 
              }))
            : [];
          this.filteredRoutes = this.vehiculeRoutes;
        },
        (error) => {
          console.error("Error loading routes:", error);
        }
      );

    this.vehiculeRouteService.getAllVehiculeRoutes();
  }

  loadAffaires(): void {
    this.affaireService.onAffairesListChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        if (data) {
          this.affaires = data;
        }
      });

    this.affaireService.getAffaires();
  }

  loadFournisseurs(): void {
    this.fournisseurService.getAllFournisseurs().then(
      (fournisseurs) =>
        (this.fournisseurs = Array.isArray(fournisseurs) ? fournisseurs : []),
      (error) => {
        console.error("Error loading fournisseurs:", error);
      }
    );
  }

  openModalFromTo(modalFromTo: any, vehiculeRoute: VehiculeRoute) {
    this.selectedVehiculeRoute = vehiculeRoute;
    this.vehiculeRouteId = vehiculeRoute?.id;

    if (!this.vehiculeRouteId) {
      console.error("Vehicule Route ID is missing, cannot open modal.");
      return;
    }
    this.vehiculeRouteService.getFromMouvementByVehiculeRouteId(
      this.vehiculeRouteId
    );
    this.modalService.open(modalFromTo, { size: "xl", centered: true });
  }

  /*openModalFromTo(modalFromTo: any, vehiculeRoute: VehiculeRoute) {
        this.selectedVehiculeRoute = vehiculeRoute;
        this.vehiculeRouteId = vehiculeRoute?.id;

        if (!this.vehiculeRouteId) {
            console.error("Vehicule Route ID is missing, cannot open modal.");
            return;
        }

        Promise.all([this.loadAffaires(), this.loadFournisseurs()])
            .then(() => {
                if (!this.affaires || this.affaires.length === 0) {
                    console.warn("Affaires not loaded correctly.");
                }
                if (!this.fournisseurs || this.fournisseurs.length === 0) {
                    console.warn("Fournisseurs not loaded correctly.");
                }

                return this.vehiculeRouteService.getFromMouvementByVehiculeRouteId(this.vehiculeRouteId);
            })
            .then((fromMouvements: FromMouvementRequestDTO[]) => {
                this.fromMouvements = fromMouvements.map((fromMouvement) => {
                    const correspondingAffaire = this.affaires.find(
                        (affaire) => affaire.id === fromMouvement.affaireId
                    ) || {id: null, code: fromMouvement.affaireCode || "-"};

                    const correspondingFournisseur = this.fournisseurs.find(
                        (fournisseur) => fournisseur.id === fromMouvement.fournisseurId
                    ) || {
                        id: null,
                        intituleFournisseur: fromMouvement.fournisseurName || "-",
                    };

                    return new FromMouvement({
                        id: fromMouvement.id,
                        affaire: correspondingAffaire,
                        fournisseur: correspondingFournisseur,
                        bl: fromMouvement.bl,
                        blMontant: fromMouvement.blMontant,
                        dateBl: fromMouvement.dateBl,
                    });
                });

                console.log(
                    "Final fromMouvements to display in modal:",
                    this.fromMouvements
                );

                this.modalService.open(associationModal, {
                    size: "xl",
                    centered: true,
                });
            })
            .catch((error) => {
                console.error("Error fetching FromMouvement data:", error);
            });
    }
*/
  closeModal(): void {
    this.modalService.dismissAll();
  }

  removeFromMouvement(fromMouvement: FromMouvement): void {
    console.log("Bouton de suppression cliqué pour :", fromMouvement);

    const isNew = !fromMouvement.id;

    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: isNew
        ? "Cette entrée sera supprimée sans être sauvegardée."
        : "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, supprimez-le !",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        if (isNew) {
          this.fromMouvements = this.fromMouvements.filter(
            (fm) => fm !== fromMouvement
          );
          Swal.fire("Supprimé !", "Votre mouvement a été supprimé.", "success");
        } else {
          this.vehiculeRouteService
            .deleteFromMouvement(fromMouvement.id)
            .subscribe({
              next: () => {
                this.fromMouvements = this.fromMouvements.filter(
                  (fm) => fm !== fromMouvement
                );
                Swal.fire(
                  "Supprimé !",
                  "Votre mouvement a été supprimé.",
                  "success"
                );
              },
              error: (error) => {
                console.error(
                  "Erreur lors de la suppression du mouvement :",
                  error
                );
                Swal.fire(
                  "Erreur !",
                  "Un problème est survenu lors de la suppression du mouvement.",
                  "error"
                );
              },
            });
        }
      }
    });
  }

  onAffaireChange(): void {
    if (this.currentFromMouvement.affaireId) {
      this.isFournisseurDisabled = true;
    } else {
      this.isFournisseurDisabled = false;
      this.currentFromMouvement.fournisseurId = null;
    }
  }

  // Method to reset the FromMouvement data
  resetFromMouvement() {
    this.currentFromMouvement = new FromMouvementRequestDTO(
      null,
      null,
      null,
      null,
      null,
      null,
      "",
      0,
      new Date()
    );
    this.isAffaireDisabled = false;
    this.isFournisseurDisabled = false;
  }

  onFournisseurChange(): void {
    if (this.currentFromMouvement.fournisseurId) {
      this.isAffaireDisabled = true;
    } else {
      this.isAffaireDisabled = false;
    }
  }

  openAddFromMouvementModal() {
    this.resetFromMouvement();
    this.modalService.open(this.addFromMouvementModal, {
      size: "lg",
      centered: true,
    });
  }

  saveFromMouvement(modal: any) {
    if (!this.selectedVehiculeRoute) {
      Swal.fire(
        "Erreur",
        "Veuillez sélectionner une Route de Véhicule avant de sauvegarder.",
        "error"
      );
      return;
    }

    if (
      !this.currentFromMouvement ||
      this.currentFromMouvement.blMontant === undefined ||
      this.currentFromMouvement.blMontant < 0 ||
      !this.currentFromMouvement.bl ||
      !this.currentFromMouvement.dateBl
    ) {
      Swal.fire(
        "Erreur",
        "Données invalides. Veuillez vérifier vos entrées.",
        "error"
      );
      return;
    }

    const selectedAffaire = this.currentFromMouvement.affaire;
    const selectedFournisseur = this.currentFromMouvement.fournisseur;

    if (selectedAffaire && selectedFournisseur) {
      Swal.fire(
        "Erreur de Sélection",
        "Vous ne pouvez pas sélectionner à la fois une Affaire et un Fournisseur. Veuillez choisir uniquement l'un des deux.",
        "error"
      );
      return;
    }

    if (!selectedAffaire && !selectedFournisseur) {
      Swal.fire(
        "Erreur de Sélection",
        "Veuillez sélectionner soit une Affaire soit un Fournisseur avant de sauvegarder.",
        "error"
      );
      return;
    }

    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous êtes sur le point de sauvegarder le Mouvement d'origine.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, sauvegardez-le !",
      cancelButtonText: "Non, annulez !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const fromMouvementRequestDTO = new FromMouvementRequestDTO(
            this.currentFromMouvement.id,
            this.selectedVehiculeRoute.id,
            selectedAffaire ? selectedAffaire.id : null,
            selectedAffaire ? selectedAffaire.code : null,
            selectedFournisseur ? selectedFournisseur.id : null,
            selectedFournisseur
              ? selectedFournisseur.intituleFournisseur
              : null,
            this.currentFromMouvement.bl,
            this.currentFromMouvement.blMontant,
            new Date(this.currentFromMouvement.dateBl)
          );

          await this.vehiculeRouteService.saveFromMouvement(
            fromMouvementRequestDTO
          );

          Swal.fire(
            "Succès",
            "Mouvement d'origine sauvegardé avec succès.",
            "success"
          ).then(() => {
            modal.close();
            this.refreshFromMouvements();
          });
        } catch (error: any) {
          if (error.status === 400) {
            Swal.fire(
              "Erreur de Validation",
              "Les données saisies sont invalides. Veuillez vérifier et réessayer.",
              "error"
            );
          } else if (error.status === 404) {
            Swal.fire(
              "Erreur",
              "La Route de Véhicule ou une autre ressource liée n'a pas été trouvée.",
              "error"
            );
          } else if (error.status === 500) {
            Swal.fire(
              "Erreur Interne",
              "Une erreur interne s'est produite. Veuillez réessayer plus tard.",
              "error"
            );
          } else {
            Swal.fire(
              "Erreur Inconnue",
              "Une erreur inattendue est survenue : " + error.message,
              "error"
            );
          }

          console.error(
            "Erreur lors de la sauvegarde du Mouvement d'origine :",
            error
          );
        }
      }
    });
  }

  refreshFromMouvements() {
    this.vehiculeRouteService.getFromMouvementByVehiculeRouteId(
      this.vehiculeRouteId
    );

    /* this.vehiculeRouteService.getFromMouvementByVehiculeRouteId(this.vehiculeRouteId)
             .then((fromMouvements: FromMouvementResponseDTO[]) => {
                 this.fromMouvements = fromMouvements.map((fromMouvement) => {
                     const correspondingAffaire = this.affaires.find(
                         (affaire) => affaire.id === fromMouvement.affaireId
                     ) || {id: null, code: fromMouvement.affaireCode || "-"};

                     const correspondingFournisseur = this.fournisseurs.find(
                         (fournisseur) => fournisseur.id === fromMouvement.fournisseurId
                     ) || {
                         id: null,
                         intituleFournisseur: fromMouvement.fournisseurName || "-",
                     };

                     return new FromMouvement({
                         id: fromMouvement.id,
                         affaire: correspondingAffaire,
                         fournisseur: correspondingFournisseur,
                         bl: fromMouvement.bl,
                         blMontant: fromMouvement.blMontant,
                         dateBl: fromMouvement.dateBl,
                     });
                 });
             })
             .catch((error) =>
                 console.error("Error refreshing FromMouvement data:", error)
             );*/
  }

  openEditFromMouvementModal(fromMouvement: FromMouvementResponseDTO) {
    this.fromMouvementResponseDTO = fromMouvement;
    console.log(fromMouvement);
    this.ngbDateBl = {
      day: new Date(this.fromMouvementResponseDTO?.dateBl).getDate(),
      month: new Date(this.fromMouvementResponseDTO?.dateBl).getMonth() + 1,
      year: new Date(this.fromMouvementResponseDTO?.dateBl).getFullYear(),
    };
    this.fromMouvementResponseDTO.affaire = {
      id: fromMouvement.affaireId,
      code: fromMouvement.affaireCode,
      intitule: fromMouvement.affaireCode,
      typeProjet: "",
      villeintitule: "",
      chefZoneFullName: "",
      chefZoneUsername: "",
    };

    this.fromMouvementResponseDTO.fournisseur = {
      id: fromMouvement.fournisseurId,
      abbreviationFournisseur: fromMouvement.fournisseurName,
      intituleFournisseur: fromMouvement.fournisseurName,
      adresseFournisseur: "",
      ice: "",
      email: "",
      telephone: "",
      contact: "",
    };

    console.log(this.fromMouvementResponseDTO);

    // Open the modal
    this.modalService.open(this.editeFromMouvementModal, {
      size: "lg",
      centered: true,
    });
  }

  onAffaireChangeedite() {
    const selectedAffaireId = this.fromMouvementResponseDTO.affaireId;
    console.log("Selected Affaire ID:", selectedAffaireId);
  }

  onFournisseurChangeedite() {
    const selectedFournisseurId = this.fromMouvementResponseDTO.fournisseurId;
    console.log("Selected Fournisseur ID:", selectedFournisseurId);
  }
  async updateFromMouvement(modal: any) {
    if (!this.vehiculeRouteId) {
      Swal.fire(
        "Erreur",
        "Veuillez sélectionner une Route de Véhicule avant de sauvegarder.",
        "error"
      );
      return;
    }

    console.log("Affaire:", this.fromMouvementResponseDTO.affaire);
    console.log("Fournisseur:", this.fromMouvementResponseDTO.fournisseur);

    const selectedAffaire = this.fromMouvementResponseDTO.affaire;
    const selectedFournisseur = this.fromMouvementResponseDTO.fournisseur;

    if (selectedAffaire && selectedFournisseur) {
      Swal.fire(
        "Erreur de Sélection",
        "Vous ne pouvez pas sélectionner à la fois une Affaire et un Fournisseur. Veuillez choisir uniquement l'un des deux.",
        "error"
      );
      return;
    }

    if (!selectedAffaire && !selectedFournisseur) {
      Swal.fire(
        "Erreur de Sélection",
        "Veuillez sélectionner soit une Affaire soit un Fournisseur avant de sauvegarder.",
        "error"
      );
      return;
    }

    // Check for invalid form data
    const { bl, blMontant, dateBl } = this.fromMouvementResponseDTO;

    if (!bl || bl.trim() === "") {
      Swal.fire(
        "Erreur",
        "Le champ BL est obligatoire et ne peut pas être vide.",
        "error"
      );
      return;
    }

    if (blMontant == null || blMontant < 0) {
      Swal.fire(
        "Erreur",
        "Le montant BL doit être un nombre positif.",
        "error"
      );
      return;
    }

    if (!dateBl || isNaN(new Date(dateBl).getTime())) {
      Swal.fire("Erreur", "La date BL est invalide ou manquante.", "error");
      return;
    }

    // Create FromMouvementRequestDTO object
    const fromMouvement: FromMouvementRequestDTO = {
      id: this.fromMouvementResponseDTO.id,
      vehiculeRouteId: this.vehiculeRouteId,
      affaireId: selectedAffaire ? selectedAffaire.id : null,
      affaireCode: selectedAffaire ? selectedAffaire.code : null,
      fournisseurId: selectedFournisseur ? selectedFournisseur.id : null,
      fournisseurName: selectedFournisseur
        ? selectedFournisseur.intituleFournisseur
        : null,
      bl: bl.trim(),
      blMontant: blMontant,
      dateBl: dateBl,
    };

    console.log("Mise à jour du Mouvement d'origine avec :", fromMouvement);

    try {
      if (this.fromMouvementResponseDTO.id) {
        await this.vehiculeRouteService.updateFrom(fromMouvement);
        Swal.fire(
          "Succès",
          "Mouvement d'origine mis à jour avec succès.",
          "success"
        );
        this.refreshFromMouvements();
      }
      modal.close("Clic accepté");
    } catch (error: any) {
      if (error.status === 400) {
        Swal.fire(
          "Erreur de Validation",
          "Les données saisies sont invalides. Veuillez vérifier et réessayer.",
          "error"
        );
      } else if (error.status === 404) {
        Swal.fire(
          "Erreur",
          "La Route de Véhicule ou une autre ressource liée n'a pas été trouvée.",
          "error"
        );
      } else if (error.status === 500) {
        Swal.fire(
          "Erreur Interne",
          "Une erreur interne s'est produite. Veuillez réessayer plus tard.",
          "error"
        );
      } else {
        Swal.fire(
          "Erreur Inconnue",
          "Une erreur inattendue est survenue : " + error.message,
          "error"
        );
      }

      console.error(
        "Erreur lors de la mise à jour du Mouvement d'origine :",
        error
      );
    }
  }

  //new Structure Imputation ----02/11/2024-----------------------------------------------------------------------------------

  /*  async getImputations(vehiculeRouteId: number, content: any) {
            try {
                const data =
                    await this.vehiculeRouteService.getImputationByVehiculeRouteId(vehiculeRouteId);
                this.imputations = data as TripImputationRequestDTO[];
                this.modalService.open(content, {size: "xl", centered: true});
            } catch (error) {
                console.error("Error fetching imputations:", error);
            }
        }*/

  openModalsViewImputations(
    modalImputations: any,
    vehiculeRoute: VehiculeRoute
  ) {
    this.selectedVehiculeRoute = vehiculeRoute;
    this.vehiculeRouteId = vehiculeRoute?.id;

    if (!this.vehiculeRouteId) {
      console.error("Vehicule Route ID is missing, cannot open modal.");
      return;
    }
    this.vehiculeRouteService.imputationByVehiculeRoute(this.vehiculeRouteId);
    this.modalService.open(modalImputations, { size: "xl", centered: true });
  }

  removeImputation(imputation: TripImputationResponseDTO): void {
    const isNew = !imputation.id;
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: isNew
        ? "Cette imputation sera supprimée sans être enregistrée."
        : "Cette imputation sera définitivement supprimée !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, supprimez-la !",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        if (isNew) {
          this.imputations = this.imputations.filter((i) => i !== imputation);
          Swal.fire("Supprimé !", "L'imputation a été supprimée.", "success");
        } else {
          this.vehiculeRouteService.deleteImputation(imputation.id).subscribe({
            next: () => {
              this.imputations = this.imputations.filter(
                (i) => i !== imputation
              );
              Swal.fire(
                "Supprimé !",
                "L'imputation a été supprimée.",
                "success"
              );
            },
            error: (error) => {
              console.error(
                "Erreur lors de la suppression de l'imputation :",
                error
              );
              Swal.fire(
                "Erreur !",
                "Il y a eu un problème lors de la suppression de l'imputation.",
                "error"
              );
            },
          });
        }
      }
    });
  }

  addImputation() {
    const newImputation = new TripImputationResponseDTO(
      null,
      null,
      "",
      0,
      "",
      null,
      null,
      null,
      "",
      0,
      null
    );
    this.imputations.push(newImputation);
  }

  //reset data and initializ imputation

  //save Imputation Modal
  async saveImputation(modal: any) {
    if (!this.vehiculeRouteId) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez sélectionner une Route de Véhicule avant de sauvegarder.",
      });
      return;
    }

    if (!this.tripImputationResponseDTO) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez ajouter une imputation avant de sauvegarder.",
      });
      return;
    }

    const { fillingPercentage } = this.tripImputationResponseDTO;
    if (
      fillingPercentage == null ||
      fillingPercentage < 0 ||
      fillingPercentage > 100
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Le pourcentage de remplissage doit être compris entre 0 et 100.",
      });
      return;
    }

    if (!this.tripImputationResponseDTO.affaire) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "L'affaire est obligatoire.",
      });
      return;
    }
    if (!this.tripImputationResponseDTO.client) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Le client est obligatoire.",
      });
      return;
    }

    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous êtes sur le point de sauvegarder l'imputation.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, sauvegarder!",
      cancelButtonText: "Non, annuler!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const tripImputationRequestDTO: TripImputationRequestDTO = {
            id: this.tripImputationResponseDTO.id,
            affaireId: this.tripImputationResponseDTO.affaire?.id,
            affaireCode: this.tripImputationResponseDTO.affaire?.code || "",
            vehiculeRouteId: this.vehiculeRouteId,
            fillingPercentage: this.tripImputationResponseDTO.fillingPercentage,
            observation: this.tripImputationResponseDTO.observation || "",
            clientId: this.tripImputationResponseDTO.client?.id,
            lotId: this.tripImputationResponseDTO.lot?.id,
            subContractorId: this.tripImputationResponseDTO.soustraitant?.id,
            subContractorFullName:
              this.tripImputationResponseDTO.soustraitant?.fullName || "",
            costImputation: this.tripImputationResponseDTO.costImputation,
          };

          await this.vehiculeRouteService.saveImputation(
            tripImputationRequestDTO
          );

          Swal.fire(
            "Succès!",
            "Imputation enregistrée avec succès.",
            "success"
          ).then(() => {
            modal.close("Accept click");
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Une erreur s'est produite lors de la sauvegarde de l'imputation.",
          });
          console.error("Error saving the imputation:", error);
        }
      }
    });
  }

  resetImputationData() {
    //this.vehiculeRouteId = null;
    this.tripImputationResponseDTO = {
      id: null,
      affaireId: null,
      fillingPercentage: 0,
      observation: "",
      client: null,
      lot: null,
      subContractorId: null,
      costImputation: null,
      affaireCode: "",
      subContractorFullName: "",
    };
  }

  openAddImputationModal() {
    this.resetImputationData();
    const modalRef = this.modalService.open(this.addImputationModal, {
      size: "xl",
      centered: true,
    });
  }

  //update Imputation modal

  openEditImputationModal(imputation: TripImputationResponseDTO) {
    //this.newImputation = { ...imputation };
    this.tripImputationResponseDTO = imputation;

    this.tripImputationResponseDTO.affaire = {
      id: imputation.affaireId,
      code: imputation.affaireCode,
      intitule: imputation.affaireCode,
      typeProjet: "",
      villeintitule: "",
      chefZoneFullName: "",
      chefZoneUsername: "",
    };

    this.tripImputationResponseDTO.soustraitant = {
      id: imputation.subContractorId,
      fullName: imputation.subContractorFullName,
    };

    this.vehiculeRouteService
      .getSoustraitants(imputation.affaireId)
      .then((data: Soustraitant[]) => {
        this.soustraitants = data;
      });

    this.modalService.open(this.editeImputationModal, {
      size: "xl",
      centered: true,
    });
  }

  async updateImputation(modal: any) {
    if (!this.vehiculeRouteId) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez sélectionner une Route de Véhicule avant de mettre à jour.",
      });
      return;
    }

    if (!this.tripImputationResponseDTO) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez ajouter une imputation avant de mettre à jour.",
      });
      return;
    }

    const { fillingPercentage } = this.tripImputationResponseDTO;
    if (
      fillingPercentage == null ||
      fillingPercentage < 0 ||
      fillingPercentage > 100
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Le pourcentage de remplissage doit être compris entre 0 et 100.",
      });
      return;
    }

    if (!this.tripImputationResponseDTO.affaire) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "L'affaire est obligatoire.",
      });
      return;
    }
    if (!this.tripImputationResponseDTO.client) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Le client est obligatoire.",
      });
      return;
    }

    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous êtes sur le point de mettre à jour l'imputation.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, mettre à jour!",
      cancelButtonText: "Non, annuler!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const imputation: TripImputationRequestDTO = {
            id: this.tripImputationResponseDTO.id,
            affaireId: this.tripImputationResponseDTO.affaire?.id,
            affaireCode: this.tripImputationResponseDTO.affaire?.code || "",
            vehiculeRouteId: this.vehiculeRouteId,
            fillingPercentage: this.tripImputationResponseDTO.fillingPercentage,
            observation: this.tripImputationResponseDTO.observation || "",
            clientId: this.tripImputationResponseDTO.client?.id,
            lotId: this.tripImputationResponseDTO.lot?.id,
            subContractorId: this.tripImputationResponseDTO.soustraitant?.id,
            subContractorFullName:
              this.tripImputationResponseDTO.soustraitant?.fullName || "",
            costImputation: this.tripImputationResponseDTO.costImputation,
          };

          await this.vehiculeRouteService.updateImputation(imputation);

          Swal.fire(
            "Succès!",
            "Imputation mise à jour avec succès.",
            "success"
          );

          modal.close("Accept click");
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Une erreur s'est produite lors de la mise à jour de l'imputation.",
          });
          console.error("Error updating the imputation:", error);
        }
      }
    });
  }

  isFormValid(): boolean {
    return (
      this.tripImputationResponseDTO.affaireId > 0 &&
      this.tripImputationResponseDTO.fillingPercentage >= 0 &&
      this.tripImputationResponseDTO.fillingPercentage <= 100 &&
      this.tripImputationResponseDTO.client != null
    );
  }

  getTotalCostImputation(): number {
    return this.imputations.reduce(
      (total, imputation) => total + (imputation.costImputation || 0),
      0
    );
  }

  /* enableEdit(imputation: TripImputationDTO) {
        this.isInputsDisabled = false;
        this.currentImputation = imputation;
    } */
  getAffaireCode(affaireId: number): string {
    const affaire = this.affaires.find((a) => a.id === affaireId);
    return affaire ? affaire.code : "Unknown";
  }

  getClientName(clientId: number): string {
    const client = this.clients.find((c) => c.id === clientId);
    return client ? client.name : "Unknown";
  }

  getLotName(lotId: number): string {
    const lot = this.lots.find((l) => l.id === lotId);
    return lot ? lot.name : "Unknown";
  }

  getSubContractorName(subContractorId: number): string {
    const soustraitant = this.soustraitants.find(
      (s) => s.id === subContractorId
    );
    return soustraitant ? soustraitant.fullName : "Unknown";
  }

  //----------------------------------------------------------------------------------------------------------------

  //--------------------------costfillilng
  confirmFillingPercentage(vehiculeRoute: VehiculeRoute): void {
    if (
      vehiculeRoute.fillingPercentage !== undefined &&
      vehiculeRoute.fillingPercentage >= 0 &&
      vehiculeRoute.fillingPercentage <= 100
    ) {
      let dto: UpdateFillingPercentageDTO = new UpdateFillingPercentageDTO(
        vehiculeRoute.id,
        vehiculeRoute.fillingPercentage
      );

      this.vehiculeRouteService.updateFillingPercentage(dto).then(
        (updatedRoutes) => {
          this.vehiculeRoutes = updatedRoutes;

          this.filterData(this.filterType);

          this.toastr.success(
            "Le pourcentage de remplissage a été mis à jour avec succès !"
          );
        },
        (error) => {
          console.error(
            "Erreur lors de la mise à jour du pourcentage de remplissage",
            error
          );
          this.toastr.error(
            "Échec de la mise à jour du pourcentage de remplissage."
          );
        }
      );
    } else {
      this.toastr.warning(
        "Veuillez entrer un pourcentage de remplissage valide entre 0 et 100."
      );
    }
  }

  //---------------------------------------------------
  editRow(row: any): void {
    this.selectedRow = { ...row };
  }

  updateRouteLength(row: any): void {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Voulez-vous vraiment mettre à jour la longueur de l'itinéraire?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, mettre à jour",
      cancelButtonText: "Non, annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateDto: UpdateMouvementDTO = {
          id: row.id,
          routeLength: row.routeLength,
        };

        this.vehiculeRouteService
          .updateMouvement(updateDto)
          .then((response) => {
            console.log("Mise à jour réussie", response);
            this.toastr.success(
              "La longueur de l'itinéraire a été mise à jour avec succès!",
              "Succès"
            );

            this.selectedRow.route_length = updateDto.routeLength;
            this.selectedRow = null;

            Swal.fire({
              title: "Succès!",
              text: "La longueur de l'itinéraire a été mise à jour avec succès!",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            console.error("Échec de la mise à jour", error);
            this.toastr.error(
              "Échec de la mise à jour de la longueur de l'itinéraire",
              "Erreur"
            );

            Swal.fire({
              title: "Erreur!",
              text: "Échec de la mise à jour de la longueur de l'itinéraire.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Annulé",
          text: "La mise à jour de la longueur de l'itinéraire a été annulée.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    });
  }

  //------------------------------------------------

  /*refreshData(): void {
          // Method to refresh or reload the data
          this.vehiculeRouteService.getAllVehiculeRoutes().then(
            routes => {
              this.rows = routes;
            },
            error => {
              console.error('Error refreshing data', error);
              this.toastr.error('Failed to refresh data.');
            }
          );
        }*/
  affaireSelected: Affaire;
  subContractorSelected: Soustraitant;
  mode: string = "display";

  onAffaireChanged(affaire: Affaire) {
    this.soustraitants = [];
    this.tripImputationResponseDTO.affaireCode = affaire.code;
    this.tripImputationResponseDTO.affaireId = affaire.id;

    this.vehiculeRouteService
      .getSoustraitants(affaire.id)
      .then((data: Soustraitant[]) => {
        this.soustraitants = data;
        console.log("Soustraitants:", this.soustraitants);
      });
  }

  onSubcontractorChanged(subContractor: Soustraitant) {
    console.log("onSubcontractorChanged");
    console.log(subContractor);
    this.tripImputationResponseDTO.subContractorId = subContractor.id;
    this.tripImputationResponseDTO.subContractorFullName =
      subContractor.fullName;

    /*const selectedSubContractor = this.soustraitants.find(sub => sub.id === subContractorId);
            if (selectedSubContractor) {
                this.newImputation.subContractorId = selectedSubContractor.id;
                this.newImputation.subContractorFullName = selectedSubContractor.fullName;
            }*/
  }

  onFillingKeyUp() {
    this.tripImputationResponseDTO.costImputation =
      (this.tripImputationResponseDTO.fillingPercentage *
        this.selectedVehiculeRoute.costPerTrip) /
      100;
  }

  onDateBlChange(ngbDateStruct: NgbDateStruct) {
    this.ngbDateBl = ngbDateStruct;
    this.fromMouvementResponseDTO.dateBl = new Date(
      this.ngbDateBl.year,
      this.ngbDateBl.month - 1,
      this.ngbDateBl.day
    );
    console.log(this.fromMouvementResponseDTO.dateBl);
  }
  //------------------status vehicule Route------------------------
  
}
