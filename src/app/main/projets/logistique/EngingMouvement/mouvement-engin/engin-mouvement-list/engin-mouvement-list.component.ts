import { EnginRouteDTO } from "./../../dto/EnginRouteDTO";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { takeUntil } from "rxjs/operators";
import { MouvementEnginService } from "./../mouvement-engin.service";
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Subject } from "rxjs";
import { EnginRoute } from "../../models/EnginRoute";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EnginImputationResponseDTO } from "../../dto/EnginImputationResponseDTO";
import { EnginImputationRequestDTO } from "../../dto/EnginImputationRequestDTO";
import { Client } from "../../models/client";
import { Lot } from "../../models/lot";
import { AffaireService } from "../affaire/affaire.service";
import { Affaire } from "../../models/affaire.model";
import { Soustraitant } from "../../models/soustraitant";
import { EnginGpsLocation } from "../../models/EnginGpsLocation";

@Component({
  selector: "app-engin-mouvement-list",
  templateUrl: "./engin-mouvement-list.component.html",
  styleUrls: ["./engin-mouvement-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class EnginMouvementListComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  public ColumnMode = ColumnMode;
  filteredRoutes: EnginRoute[] = [];
  enginRoutes: EnginRoute[] = [];
  filterType: string = "";
  filterDate?: string;
  filterEnginName: string = "";
  selectedRow: any = null;
  selectedEnginRoute: EnginRoute | null = null;
  enginRouteId: number | undefined;
  imputations: EnginImputationResponseDTO[] = [];
  @ViewChild("addImputationModal") addImputationModal: TemplateRef<any>;
  @ViewChild("editeImputationModal") editeImputationModal: TemplateRef<any>;
  clients: Client[] = [];
  lots: Lot[] = [];
  affaires: Affaire[] = [];
  soustraitants: Soustraitant[] = [];
  selectedEnginGps: EnginGpsLocation;

  hours: number[] = Array.from({ length: 24 }, (_, i) => i); // 0-23
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i); // 0-59
  seconds: number[] = Array.from({ length: 60 }, (_, i) => i); // 0-59

  selectedTime = { hours: 0, minutes: 0, seconds: 0 };

  enginImputationResponseDTO: EnginImputationResponseDTO = {
    id: null,
    affaireId: null,
    nbrHImputation: 0,
    observation: "",
    client: null,
    lot: null,
    subContractorId: null,
    costImputation: null,
    affaireCode: "",
    subContractorFullName: "",
  };

  constructor(
    private mouvementEnginService: MouvementEnginService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private affaireService: AffaireService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.loadEnginRoutes();
    this.fetchClients();
    this.fetchLots();
    this.loadAffaires();
  }
  fetchClients(): void {
    this.mouvementEnginService.getAllClients().then((data: Client[]) => {
      this.clients = data;
      console.log("Clients:", this.clients);
    });
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

  fetchLots(): void {
    this.mouvementEnginService.getAllLots().then((data: Lot[]) => {
      this.lots = data;
      console.log("Lots:", this.lots);
    });
  }

  loadEnginRoutes(): void {
    this.mouvementEnginService.onEnginListChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (routes) => {
          this.enginRoutes = Array.isArray(routes)
            ? routes.map((route) => ({
                ...route,
                isEditing: false,
              }))
            : [];
          this.filteredRoutes = this.enginRoutes;
          this.filterData(this.filterType);
        },
        (error) => {
          console.error("Error loading routes:", error);
        }
      );

    this.mouvementEnginService.getAllEnginRoutes();
  }

  filterData(filterType: string = ""): void {
    this.filterType = filterType;

    this.filteredRoutes = this.enginRoutes.filter((route) => {
      const matchesDate = this.filterDate
        ? new Date(route.date!).toISOString().split("T")[0] === this.filterDate
        : true;

      const matcheEnginName = this.filterEnginName
        ? route.enginGpsLocation?.name
            ?.toLowerCase()
            .includes(this.filterEnginName.toLowerCase())
        : true;

      // Apply filter based on type only if filterType is set
      // const matchesType = this.filterType
      //   ? route.vehiculeGpsLocation?.groupName === this.filterType
      //   : true;

      return matchesDate && matcheEnginName;
    });
  }

  //update Rendement
  updateRendement(row: any): void {
    const formattedTime =
      `${this.selectedTime.hours.toString().padStart(2, "0")}:` +
      `${this.selectedTime.minutes.toString().padStart(2, "0")}:` +
      `${this.selectedTime.seconds.toString().padStart(2, "0")}`;

    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Voulez-vous vraiment mettre à jour le rendement?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, mettre à jour",
      cancelButtonText: "Non, annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateDto: EnginRouteDTO = {
          id: row.id,
          rendement: formattedTime,
        };

        this.mouvementEnginService
          .updateRendement(updateDto)
          
          .then(() => {
            this.toastr.success(
              "Le rendement a été mis à jour avec succès!",
              "Succès"
            );
            Object.assign(row, updateDto);
            this.selectedRow = null;
            
          })
          .catch((error) => {
            this.toastr.error(
              "Erreur lors de la mise à jour du rendement.",
              "Erreur"
            );
            console.error(error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.toastr.info("La mise à jour a été annulée.", "Info");
      }
    });
  }
  cancelEdit(): void {
    this.selectedRow = null;
  }
  editRow(row: any): void {
    const [hours, minutes, seconds] = row.rendement.split(":").map(Number);
    this.selectedRow = { ...row };
    this.selectedTime = { hours, minutes, seconds };
  }

  //ImputationEngin
  openModalsViewImputations(modalImputations: any, enginRoute: EnginRoute) {
    this.selectedEnginRoute = enginRoute;
    this.enginRouteId = enginRoute?.id;

    if (!this.enginRouteId) {
      console.error("Engin Route ID is missing, cannot open modal.");
      return;
    }

    this.mouvementEnginService
      .imputationByEnginRoute(this.enginRouteId)
      .then((response: any[]) => {
        this.imputations = response;
        this.modalService.open(modalImputations, {
          size: "xl",
          centered: true,
        });
      })
      .catch((error) => {
        console.error("Error fetching imputations:", error);
      });
  }

  getTotalCostImputation(): number {
    return this.imputations.reduce(
      (total, imputation) => total + (imputation.costImputation || 0),
      0
    );
  }

  addImputation() {
    const newImputation = new EnginImputationResponseDTO(
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

  async saveImputation(modal: any) {
    if (!this.enginRouteId) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez sélectionner une Route de Véhicule avant de sauvegarder.",
      });
      return;
    }

    if (!this.enginImputationResponseDTO) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez ajouter une imputation avant de sauvegarder.",
      });
      return;
    }

    /*  const { nbrHImputation } = this.enginImputationResponseDTO;
    if (
      nbrHImputation == null ||
      nbrHImputation < 0 ||
      nbrHImputation > 100
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Le pourcentage de remplissage doit être compris entre 0 et 100.",
      });
      return;
    } */

    if (!this.enginImputationResponseDTO.affaire) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "L'affaire est obligatoire.",
      });
      return;
    }
    if (!this.enginImputationResponseDTO.client) {
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
          const enginImputationRequestDTO: EnginImputationRequestDTO = {
            id: this.enginImputationResponseDTO?.id,
            affaireId: this.enginImputationResponseDTO.affaire?.id,
            affaireCode: this.enginImputationResponseDTO.affaire?.code || "",
            enginRouteId: this.enginRouteId,
            nbrHImputation: this.enginImputationResponseDTO.nbrHImputation,
            observation: this.enginImputationResponseDTO.observation || "",
            clientId: this.enginImputationResponseDTO.client?.id,
            lotId: this.enginImputationResponseDTO.lot?.id,
            subContractorId: this.enginImputationResponseDTO.soustraitant?.id,
            subContractorFullName:
              this.enginImputationResponseDTO.soustraitant?.fullName || "",
            costImputation: this.enginImputationResponseDTO.costImputation,
          };

          await this.mouvementEnginService.saveImputation(
            enginImputationRequestDTO
          );
          this.mouvementEnginService.imputationByEnginRoute(enginImputationRequestDTO.id);
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
    this.enginImputationResponseDTO = {
      id: null,
      affaireId: null,
      nbrHImputation: 0,
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
  onAffaireChanged(affaire: Affaire) {
    this.soustraitants = [];
    this.enginImputationResponseDTO.affaireCode = affaire.code;
    this.enginImputationResponseDTO.affaireId = affaire.id;

    this.mouvementEnginService
      .getSoustraitants(affaire.id)
      .then((data: Soustraitant[]) => {
        this.soustraitants = data;
        console.log("Soustraitants:", this.soustraitants);
      });
  }
  onHoursKeyUp() {
    const nbrHImputation = this.enginImputationResponseDTO.nbrHImputation;
  
    // Ensure selectedEnginRoute and enginGpsLocation exist
    if (!this.selectedEnginRoute || !this.selectedEnginRoute.enginGpsLocation) {
      console.warn("Selected EnginRoute or EnginGpsLocation is missing.");
      this.enginImputationResponseDTO.costImputation = 0;
      return;
    }
  
    const costPerH = this.selectedEnginRoute.enginGpsLocation.coutH;
  
    // Validate nbrHImputation and costPerH
    if (nbrHImputation === null || nbrHImputation === undefined || nbrHImputation <= 0) {
      console.warn("Invalid number of hours (nbrHImputation).");
      this.enginImputationResponseDTO.costImputation = 0;
      return;
    }
  
    if (costPerH === null || costPerH === undefined || costPerH <= 0) {
      console.warn("Invalid cost per hour (coutH).");
      this.enginImputationResponseDTO.costImputation = 0;
      return;
    }
  
    // Calculate the cost of imputation
    this.enginImputationResponseDTO.costImputation = nbrHImputation * costPerH;
  
    console.log(
      "Calculated Cost Imputation:",
      this.enginImputationResponseDTO.costImputation
    );
  }
  

  onEnginSelected(engin: EnginGpsLocation) {
    this.selectedEnginGps = engin;
    console.log("Selected Engin GPS:", this.selectedEnginGps);
  }

  onSubcontractorChanged(subContractor: Soustraitant) {
    console.log("onSubcontractorChanged");
    console.log(subContractor);
    this.enginImputationResponseDTO.subContractorId = subContractor.id;
    this.enginImputationResponseDTO.subContractorFullName =
      subContractor.fullName;
  }
  removeImputation(imputation: EnginImputationResponseDTO): void {
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
          this.mouvementEnginService.deleteImputation(imputation.id).subscribe({
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

  //edite Imputation 
  openEditImputationModal(imputation: EnginImputationResponseDTO) {
      this.enginImputationResponseDTO = imputation;
  
      this.enginImputationResponseDTO.affaire = {
        id: imputation.affaireId,
        code: imputation.affaireCode,
        intitule: imputation.affaireCode,
        typeProjet: "",
        villeintitule: "",
        chefZoneFullName: "",
        chefZoneUsername: "",
      };
  
      this.enginImputationResponseDTO.soustraitant = {
        id: imputation.subContractorId,
        fullName: imputation.subContractorFullName,
      };
  
      this.mouvementEnginService
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
      if (!this.enginRouteId) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Veuillez sélectionner une Route de Véhicule avant de mettre à jour.",
        });
        return;
      }
  
      if (!this.enginImputationResponseDTO) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Veuillez ajouter une imputation avant de mettre à jour.",
        });
        return;
      }
  
      /* const { fillingPercentage } = this.tripImputationResponseDTO;
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
      } */
  
      if (!this.enginImputationResponseDTO.affaire) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "L'affaire est obligatoire.",
        });
        return;
      }
      if (!this.enginImputationResponseDTO.client) {
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
            const imputation: EnginImputationRequestDTO = {
              id: this.enginImputationResponseDTO.id,
              affaireId: this.enginImputationResponseDTO.affaire?.id,
              affaireCode: this.enginImputationResponseDTO.affaire?.code || "",
              enginRouteId: this.enginRouteId,
              nbrHImputation: this.enginImputationResponseDTO.nbrHImputation,
              observation: this.enginImputationResponseDTO.observation || "",
              clientId: this.enginImputationResponseDTO.client?.id,
              lotId: this.enginImputationResponseDTO.lot?.id,
              subContractorId: this.enginImputationResponseDTO.soustraitant?.id,
              subContractorFullName:
                this.enginImputationResponseDTO.soustraitant?.fullName || "",
              costImputation: this.enginImputationResponseDTO.costImputation,
            };
  
            await this.mouvementEnginService.updateImputation(imputation);
            this.mouvementEnginService.getImputationByEnginRouteId(imputation.id);
  
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
  
}
