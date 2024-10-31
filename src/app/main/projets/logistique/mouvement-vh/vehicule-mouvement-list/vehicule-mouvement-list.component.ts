import {ColumnMode} from "@swimlane/ngx-datatable";

import {
    ChangeDetectorRef,
    Component,
    OnInit,
    TemplateRef,
    ViewEncapsulation,
} from "@angular/core";
import Swal from "sweetalert2";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {AbstractControl, ValidatorFn} from "@angular/forms";
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
import {UpdateMouvementDTO} from "../../models/DTO/UpdateMouvementDTO";
import {TripImputationDTO} from "../../models/DTO/TripImputationDTO";
import {Client} from "../../models/client";
import {Lot} from "../../models/lot";
import {Soustraitant} from "../../models/soustraitant";

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
            return {bothProvided: true};
        }
        if (!fournisseurs && !affaire) {
            return {noneProvided: true};
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
    fromMouvements: FromMouvement[] = [];
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
    imputations: TripImputationDTO[] = [];
    //-----------------------------------------------
    filterType: string = "";
    rows: VehiculeRoute[] = [];

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
                    // Check if routes is an array and map it to include isEditing property
                    this.vehiculeRoutes = Array.isArray(routes)
                        ? routes.map((route) => ({
                            ...route,
                            isEditing: false, // Initialize editing state
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
        this.affaireService.onAffairesListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
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

    openModal(modal: TemplateRef<any>, route: VehiculeRoute): void {
        this.selectedVehiculeRoute = route;

        this.vehiculeRouteService
            .getFromMouvementByVehiculeRouteId(this.selectedVehiculeRoute.id!)
            .then((fromMouvements: FromMouvement[]) => {
                if (fromMouvements && fromMouvements.length > 0) {
                    this.fromMouvements = fromMouvements.map((fromMouvement) => {
                        const correspondingAffaire = this.affaires.find(
                            (affaire) => affaire.id === fromMouvement.affaire?.id
                        );
                        const correspondingFournisseur = this.fournisseurs.find(
                            (fournisseur) =>
                                fournisseur.id === fromMouvement.fournisseur?.id
                        );
                        const dateBl = fromMouvement.dateBl
                            ? new Date(fromMouvement.dateBl)
                            : null;

                        return {
                            ...fromMouvement,
                            affaire: correspondingAffaire,
                            fournisseur: correspondingFournisseur,
                            dateBl: dateBl,
                        };
                    });
                }

                // Open modal to display the fromMouvements
                this.modalService.open(modal, {
                    size: 'xl',
                    centered: true,
                });
            })
            .catch((error) => {
                console.error('Error fetching FromMouvement data:', error);
            });
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
        };
        this.fromMouvements.push(newMouvement);
        // Initialize the mapping for the new mouvement
    }

    /*  removeFromMouvement(fromMouvement: FromMouvement): void {
       this.fromMouvements = this.fromMouvements.filter(
         (fm) => fm !== fromMouvement
       );
     } */
    removeFromMouvement(fromMouvement: FromMouvement): void {
        console.log("Remove button clicked for:", fromMouvement);

        const isNew = !fromMouvement.id;

        Swal.fire({
            title: 'Are you sure?',
            text: isNew ? 'This entry will be removed without saving.' : 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                if (isNew) {
                    this.fromMouvements = this.fromMouvements.filter(
                        (fm) => fm !== fromMouvement
                    );
                    Swal.fire('Deleted!', 'Your mouvement has been deleted.', 'success');
                } else {
                    this.vehiculeRouteService.deleteFromMouvement(fromMouvement.id).subscribe({
                        next: () => {
                            this.fromMouvements = this.fromMouvements.filter(
                                (fm) => fm !== fromMouvement
                            );
                            Swal.fire('Deleted!', 'Your mouvement has been deleted.', 'success');
                        },
                        error: (error) => {
                            console.error("Error removing mouvement:", error);
                            Swal.fire('Error!', 'There was a problem deleting the mouvement.', 'error');
                        }
                    });
                }
            }
        });
    }


    onAffaireChange(index: number): void {
        this.disabledStates[index] = {
            disableFournisseur: true,
            disableAffaire: false,
        };
    }

    onFournisseurChange(index: number): void {
        this.disabledStates[index] = {
            disableFournisseur: false,
            disableAffaire: true,
        };
    }

    saveAssociation(): void {
        const fromMouvements = this.fromMouvements.map((mouvement) => ({
            affaire: mouvement.affaire ? {id: mouvement.affaire.id} : null,
            fournisseur: mouvement.fournisseur
                ? {id: mouvement.fournisseur.id}
                : null,
            bl: mouvement.bl,
            blMontant: mouvement.blMontant,
            dateBl: new Date(mouvement.dateBl),
        }));

        const request: AssociateFromToRequestDTO = {
            vehiculeRouteId: this.selectedVehiculeRoute.id,
            fromMouvements: fromMouvements,
        };

        this.vehiculeRouteService.associateFromTo(request).subscribe(
            (response) => {
                Swal.fire({
                    title: "Success!",
                    text: "Association saved successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    this.closeModal();
                    this.loadRoutes();
                });
            },
            (error) => {
                console.error("Error saving association:", error);
                Swal.fire({
                    title: "Error!",
                    text: "There was an error saving the association.",
                    icon: "error",
                    confirmButtonText: "OK",
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
                this.modalService.open(modal, {size: "xl", centered: true});
            },
            (error) => console.error("Error fetching fromMouvements", error)
        );
    }

    //------------------------------------------------------------------imputation
    isInputsDisabled = false;
    async getImputations(vehiculeRouteId: number, content: any) {
        try {
            const data =
                await this.vehiculeRouteService.getImputationByVehiculeRouteId(
                    vehiculeRouteId
                );
            this.imputations = data as any[];
            this.modalService.open(content, {size: "xl", centered: true});
        } catch (error) {
            console.error("Error fetching imputations:", error);
        }
    }

    openModals(content: any, route: VehiculeRoute) {
        this.selectedVehiculeRoute = route;
        this.vehiculeRouteId = route?.id;

        if (!this.vehiculeRouteId) {
            console.error("Vehicule Route ID is missing, cannot open modal.");
            return;
        }

        /*
         public id: number,
        public affaireId: number,
        public fillingPercentage: number,
        public observation: string,
        public clientId: number,
        public lotId: number,
        public subContractorId: number,
        public costImputation: number,
        public isNew?: boolean,
        public vehiculeRoute?: VehiculeRoute
         */
        this.vehiculeRouteService.imputationByVehiculeRoute(this.vehiculeRouteId).subscribe({
                next: (imputations) => {
                    if (Array.isArray(imputations)) {
                        this.imputations = imputations.map((imputation) => {
                            return new TripImputationDTO(
                                imputation.id || null,
                                imputation.affaireId,
                                imputation.affaireCode,
                                imputation.fillingPercentage || 0,
                                imputation.observation || "",
                                imputation.client ? imputation.client.id : null,
                                imputation.lot ? imputation.lot.id : null,
                                imputation.subContractorId,
                                imputation.subContractorFullName,
                                imputation.costImputation || 0
                            );
                        });
                    } else {
                        console.warn("Imputations data is not an array:", imputations);
                        this.imputations = [];
                    }

                    this.modalService.open(content, {size: "xl", centered: true});
                },
                error: (error) => {
                    console.error("Error fetching imputations:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Error Fetching Imputations",
                        text: "Could not retrieve imputations for the selected route.",
                    });
                },
            });
    }


    addImputation() {
        const newImputation = new TripImputationDTO(
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
            null,
            null
        );

        this.imputations.push(newImputation);
    }


    removeImputation(imputation: TripImputationDTO): void {
        console.log("Remove button clicked for:", imputation);

        const isNew = !imputation.id;

        Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: isNew ? 'Cette imputation sera supprimée sans être enregistrée.' : 'Cette imputation sera définitivement supprimée !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui, supprimez-la !',
            cancelButtonText: 'Annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                if (isNew) {
                    const index = this.imputations.indexOf(imputation);
                    if (index > -1) {
                        this.imputations.splice(index, 1);
                    }
                    Swal.fire('Supprimé !', 'L\'imputation a été supprimée.', 'success');
                } else {
                    this.vehiculeRouteService.deleteImputation(imputation.id).subscribe({
                        next: () => {
                            const index = this.imputations.indexOf(imputation);
                            if (index > -1) {
                                this.imputations.splice(index, 1);
                            }
                            Swal.fire('Supprimé !', 'L\'imputation a été supprimée.', 'success');
                        },
                        error: (error) => {
                            console.error("Erreur lors de la suppression de l'imputation :", error);
                            if (error.status === 404) {
                                Swal.fire('Non trouvé !', 'L\'imputation que vous essayez de supprimer n\'existe pas.', 'error');
                            } else {
                                Swal.fire('Erreur !', 'Il y a eu un problème lors de la suppression de l\'imputation.', 'error');
                            }
                        }
                    });
                }
            }
        });
    }


    saveImputationAssociation() {
        if (!this.vehiculeRouteId) {
            Swal.fire({
                icon: "error",
                title: "Vehicule Route ID Missing",
                text: "Please select a Vehicule Route before saving.",
            });
            return;
        }
    
        if (!this.imputations || this.imputations.length === 0) {
            Swal.fire({
                icon: "error",
                title: "Imputations Missing",
                text: "Please add at least one imputation before saving.",
            });
            return;
        }
    
        let totalFillingPercentage = 0;
        for (const imputation of this.imputations) {
            if (imputation.fillingPercentage > 100) {
                Swal.fire({
                    icon: "error",
                    title: `Invalid Filling Percentage`,
                    text: `Filling percentage cannot be more than 100%.`,
                });
                return;
            }
            totalFillingPercentage += imputation.fillingPercentage;
        }
    
        if (totalFillingPercentage > 100) {
            Swal.fire({
                icon: "error",
                title: "Total Filling Percentage Exceeded",
                text: "Total filling percentage exceeds 100%.",
            });
            return;
        }
    
        Swal.fire({
            title: "Are you sure?",
            text: "You are about to save the imputation association.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, save it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.isConfirmed) {
                const imputationRequest: ImputationRequestDTO = {
                    vehiculeRouteId: this.vehiculeRouteId,
                    imputations: this.imputations.map((imputation) => {
                        return {
                            id: imputation.id,
                            affaireId: imputation.affaireId,
                            affaireCode: "",
                            fillingPercentage: imputation.fillingPercentage,
                            observation: imputation.observation,
                            clientId: imputation.clientId,
                            lotId: imputation.lotId,
                            subContractorId: imputation.subContractorId,
                            subContractorFullName: "",
                            costImputation: imputation.costImputation,
                        };
                    }),
                };
    
                console.log("Imputation Request Payload:", imputationRequest);
    
                this.vehiculeRouteService.associateImputation(imputationRequest)
                    .subscribe({
                        next: (vehiculeRoute: VehiculeRoute) => {
                            console.log("Updated Vehicule Route:", vehiculeRoute);
    
                            this.imputations.forEach(imputation => imputation.isSaved = true);
                            this.isInputsDisabled = true; 
    
                            Swal.fire("Success!", "Imputations associated successfully.", "success");
    
                            
                        },
                        error: (error) => {
                            Swal.fire({
                                icon: "error",
                                title: "Error",
                                text: "There was an error associating imputations.",
                            });
                            console.error("Error associating imputations:", error);
                        },
                    });
            }
        });
    }
    
    
    getTotalCostImputation(): number {
        return this.imputations.reduce(
            (total, imputation) => total + (imputation.costImputation || 0),
            0
        );
    }
    isInputDisabled = true; 
    currentImputation: TripImputationDTO | null = null; 
    
    enableEdit(imputation: TripImputationDTO) {
        this.isInputsDisabled = false; 
        this.currentImputation = imputation; 
    }


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
                (updatedRoute) => {
                    this.toastr.success("Filling percentage updated successfully!");
                },
                (error) => {
                    console.error("Error updating filling percentage", error);
                    this.toastr.error("Failed to update filling percentage.");
                }
            );
        } else {
            this.toastr.warning(
                "Please enter a valid filling percentage between 0 and 100."
            );
        }
    }

    //---------------------------------------------------
    editRow(row: any): void {
        this.selectedRow = {...row};
    }

    updateRouteLength(row: any): void {
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Voulez-vous vraiment mettre à jour la longueur de l'itinéraire?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, mettre à jour',
            cancelButtonText: 'Non, annuler',
        }).then((result) => {
            if (result.isConfirmed) {
                const updateDto: UpdateMouvementDTO = {
                    id: row.id,
                    routeLength: row.route_length,
                };

                this.vehiculeRouteService
                    .updateMouvement(updateDto)
                    .then((response) => {
                        console.log("Mise à jour réussie", response);
                        this.toastr.success("La longueur de l'itinéraire a été mise à jour avec succès!", "Succès");

                        this.loadRoutes();
                        this.selectedRow.route_length = updateDto.routeLength;
                        this.selectedRow = null;

                        Swal.fire({
                            title: 'Succès!',
                            text: "La longueur de l'itinéraire a été mise à jour avec succès!",
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    })
                    .catch((error) => {
                        console.error("Échec de la mise à jour", error);
                        this.toastr.error("Échec de la mise à jour de la longueur de l'itinéraire", "Erreur");

                        Swal.fire({
                            title: 'Erreur!',
                            text: "Échec de la mise à jour de la longueur de l'itinéraire.",
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Annulé',
                    text: "La mise à jour de la longueur de l'itinéraire a été annulée.",
                    icon: 'error',
                    confirmButtonText: 'OK'
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
    mode: string='display';

    onAffaireChanged(affaireId: number) {
        console.log("onAffaireChanged")
        console.log(affaireId)
        this.soustraitants = [];


        this.vehiculeRouteService.getSoustraitants(affaireId).then(
            (data: Soustraitant[]) => {
                this.soustraitants = data;
                console.log("Soustraitants:", this.soustraitants);
            });
    }

    onSubcontractorChanged(subContractorId: number) {
        console.log("onSubcontractorChanged")
        console.log(subContractorId)

    }
}
