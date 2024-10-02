import {ColumnMode} from "@swimlane/ngx-datatable";

import {Component, OnInit, TemplateRef, ViewEncapsulation,} from "@angular/core";
import Swal from "sweetalert2";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {AbstractControl, ValidatorFn,} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {FromMouvement} from "../../models/FromMouvement";
import {TripImputation} from "../../models/TripImputation";
import {VehiculeRoute} from "../../models/vehicule-route";
import {Affaire} from "../../models/affaire.model";
import {Fournisseur} from "../../models/fournisseur";
import {VehiculeRouteService} from "../vehicule-route.service";
import {AffaireService} from "../../affaire/affaire.service";
import {FournisseurService} from "../../fournisseur/fournisseur.service";
import {AssociateFromToRequestDTO} from "../../models/DTO/AssociateFromToRequestDTO";
import {ImputationRequestDTO} from "../../models/DTO/ImputationRequestDTO";
import {UpdateFillingPercentageDTO} from "../../models/DTO/UpdateFillingPercentageDTO";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface AssociateRequest {
  fromMouvements: FromMouvement[];
  toAffaireId: number;
  imputations: TripImputation[];
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


  //-------------------------------------------------------
  vehiculeRoutes: VehiculeRoute[] = [];
  filteredRoutes: VehiculeRoute[] = [];
  fromMouvements: FromMouvement[] = [];
  affaires: Affaire[] = [];
  fournisseurs: Fournisseur[] = [];
  toAffaireId: number | null = null;
  selectedVehiculeRoute: VehiculeRoute | null = null;
  filterDate?: string;
  filterVehiculeName: string = "";
// Define a map to track disabled states for each fromMouvement
  disabledStates: { [key: number]: { disableFournisseur: boolean, disableAffaire: boolean } } = {};
//--------------------------------------------
  vehiculeRouteId: number | undefined;
  imputations: TripImputation[] = [];
//-----------------------------------------------
  filterType: string = '';
  rows: VehiculeRoute[] = [];

  constructor(
      private vehiculeRouteService: VehiculeRouteService,
      private affaireService: AffaireService,
      private fournisseurService: FournisseurService,
      private modalService: NgbModal,
      private toastr: ToastrService
  ) {
    this._unsubscribeAll=new Subject();
  }

  ngOnInit(): void {
    this.loadRoutes();
    this.loadAffaires();
    this.loadFournisseurs();
    this.filterData();
  }

  filterData(filterType: string = ''): void {
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

  loadRoutes(): void {
    this.vehiculeRouteService.onMouvementsListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(
        (routes) => {
          this.vehiculeRoutes = Array.isArray(routes) ? routes : [];
          this.filteredRoutes = this.vehiculeRoutes; // Initialize with all data
        },
        (error) => {
          console.error("Error loading routes:", error);
        }
    );

    this.vehiculeRouteService.getAllVehiculeRoutes();
  }

  loadAffaires(): void {

    this.affaireService.onAffairesListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(data => {
      if (data) {
        this.affaires = data;
      }
    });

    this.affaireService.getAllAffaire();

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

  openModal(modal: TemplateRef<any>, route: VehiculeRoute): void {
    this.selectedVehiculeRoute = route;

    this.vehiculeRouteService.getVehiculeRouteById(this.selectedVehiculeRoute.id!).subscribe(
        (fromMouvements: FromMouvement[]) => {
          if(fromMouvements && fromMouvements.length>0){
            this.fromMouvements = fromMouvements.map(fromMouvement => {
              // console.log('Date BL:', fromMouvement.dateBl); // Check the date values here
              const correspondingAffaire = this.affaires.find(affaire => affaire.id === fromMouvement.affaire?.id);
              const correspondingFournisseur = this.fournisseurs.find(fournisseur => fournisseur.id === fromMouvement.fournisseur?.id);
              const correspondingToAffaire = this.affaires.find(affaire => affaire.id === fromMouvement.toAffaire?.id);
              const dateBl = fromMouvement.dateBl ? new Date(fromMouvement.dateBl) : null;

              return {
                ...fromMouvement,
                affaire: correspondingAffaire,
                fournisseur: correspondingFournisseur,
                toAffaire: correspondingToAffaire,
                dateBl: dateBl,
              };
            });
          }

          this.modalService.open(modal, {
            size: 'xl',
            centered: true
          });
        },
        (error) => {
          console.error("Error fetching FromMouvement data:", error);
        }
    );
  }


  closeModal(): void {
    this.modalService.dismissAll();
  }

  addFromMouvement(): void {
    const newMouvement: FromMouvement = {
      affaire: null,
      fournisseur: null,
      bl: "",
      blMontant: 0,
      dateBl: new Date(),
      departement: "",
    };
    this.fromMouvements.push(newMouvement);
    // Initialize the mapping for the new mouvement
  }

  removeFromMouvement(fromMouvement: FromMouvement): void {
    this.fromMouvements = this.fromMouvements.filter(
        (fm) => fm !== fromMouvement
    );
  }

  onAffaireChange(index: number): void {
    this.disabledStates[index] = {
      disableFournisseur: true,
      disableAffaire: false
    };
  }

  onFournisseurChange(index: number): void {
    this.disabledStates[index] = {
      disableFournisseur: false,
      disableAffaire: true
    };
  }


  saveAssociation(): void {
    if (!this.selectedVehiculeRoute) return;

    const request: AssociateFromToRequestDTO = {
      vehiculeRouteId:this.selectedVehiculeRoute.id,
      fromMouvements: this.fromMouvements,
    };

    //console.log("Request payload to backend:", request);

    // Send the request to the backend
    this.vehiculeRouteService.associateFromTo(request).subscribe(
            (response: VehiculeRoute) => {
              //console.log("Association saved successfully:", response);
              Swal.fire({
                title: 'Success!',
                text: 'Association saved successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                this.closeModal(); // Ensure you have a method to close the modal
                this.loadRoutes(); // Reload data to reflect changes
              });
            },
            (error) => {
              console.error("Error saving association:", error);
              Swal.fire({
                title: 'Error!',
                text: 'There was an error saving the association.',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }
        );
  }

  //logic Model details
  openDetailModal(modal: TemplateRef<any>, vehiculeRouteId: number) {
    this.vehiculeRouteService.getVehiculeRouteById(vehiculeRouteId).subscribe(
        (data: any[]) => {
          this.fromMouvements = data;
          //console.log('FromMouvements:', this.fromMouvements); // Log the data to verify
          this.modalService.open(modal, { size: 'xl', centered: true });
        },
        error => console.error('Error fetching fromMouvements', error)
    );
  }
//------------------------------------------------------------------imputation
  openModals(content: any, route: VehiculeRoute) {
    //console.log('Selected Vehicule Route:', route);
    this.selectedVehiculeRoute = route;
    this.vehiculeRouteId = route?.id;
    //console.log('Assigned Vehicule Route ID:', this.vehiculeRouteId);

    if (!this.vehiculeRouteId) {
      console.error('Vehicule Route ID is missing, cannot open modal.');
      return;
    }

    // Fetching all imputations for the selected VehiculeRoute
    this.vehiculeRouteService.imputationByVehiculeRoute(this.vehiculeRouteId).subscribe({
      next: (imputations) => {
        this.imputations = imputations.map(imputation => {
          const correspondingAffaire = this.affaires.find(affaire => affaire.id === imputation.affaire?.id);
          return {
            ...imputation,
            affaire: correspondingAffaire,
          };
        });

        this.modalService.open(content, { size: 'xl' ,centered: true});
      },
      error: (error) => {
        console.error('Error fetching imputations:', error);
      }
    });
  }




  addImputation() {
    this.imputations.push(new TripImputation());
  }

  removeImputation(imputation: TripImputation) {
    const index = this.imputations.indexOf(imputation);
    if (index > -1) {
      this.imputations.splice(index, 1);
    }
  }
  saveImputationAssociation() {
    if (!this.vehiculeRouteId) {
      Swal.fire({
        icon: 'error',
        title: 'Vehicule Route ID Missing',
        text: 'Please select a Vehicule Route before saving.',
      });
      return;
    }

    if (!this.imputations || this.imputations.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Imputations Missing',
        text: 'Please add at least one imputation before saving.',
      });
      return;
    }

    // Validate and adjust filling percentages
    let totalFillingPercentage = 0;
    for (let i = 0; i < this.imputations.length; i++) {
      const imputation = this.imputations[i];

      if (imputation.fillingPercentage > 100) {
        Swal.fire({
          icon: 'error',
          title: `Invalid Filling Percentage`,
          text: `Filling percentage for imputation ${i + 1} cannot be more than 100%.`,
        });
        return;
      }

      totalFillingPercentage += imputation.fillingPercentage;

      if (totalFillingPercentage > 100) {
        Swal.fire({
          icon: 'error',
          title: 'Total Filling Percentage Exceeded',
          text: 'Total filling percentage for all imputations exceeds 100%.',
        });
        return;
      }

      // Automatically set the remaining percentage for the last imputation
      if (i === this.imputations.length - 1 && totalFillingPercentage < 100) {
        const remainingPercentage = 100 - totalFillingPercentage;
        this.imputations[i].fillingPercentage += remainingPercentage;
        totalFillingPercentage = 100; // Ensures total does not exceed 100%
      }
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to save the imputation association.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Saving Imputation Association for VehiculeRoute ID:', this.vehiculeRouteId);

        const imputationRequest = new ImputationRequestDTO(this.vehiculeRouteId,this.imputations);
        this.vehiculeRouteService.associateImputation(imputationRequest).subscribe({
          next: (vehiculeRoute: VehiculeRoute) => {
            Swal.fire(
                'Success!',
                'Imputations associated successfully.',
                'success'
            );
            this.modalService.dismissAll();
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'There was an error associating imputations.',
            });
            console.error('Error associating imputations:', error);
          }
        });
      }
    });
  }
  getTotalCostImputation(): number {
    return this.imputations.reduce((total, imputation) => total + imputation.costImputation, 0);
  }
//--------------------------costfillilng
  confirmFillingPercentage(vehiculeRoute: VehiculeRoute): void {
    // Ensure the filling percentage is valid before updating
    if (vehiculeRoute.fillingPercentage !== undefined && vehiculeRoute.fillingPercentage >= 0 && vehiculeRoute.fillingPercentage <= 100) {
      let dto:UpdateFillingPercentageDTO=new UpdateFillingPercentageDTO(vehiculeRoute.id, vehiculeRoute.fillingPercentage);



      this.vehiculeRouteService.updateFillingPercentage(dto).then(
          updatedRoute => {
            // Successfully updated
            this.toastr.success('Filling percentage updated successfully!');
            //window.location.reload(); // Reload the entire page
          },
          error => {
            console.error('Error updating filling percentage', error);
            this.toastr.error('Failed to update filling percentage.');
          }
      );
    } else {
      this.toastr.warning('Please enter a valid filling percentage between 0 and 100.');
    }
  }


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


}
