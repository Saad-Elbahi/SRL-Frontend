import {Component, Input, OnInit, SimpleChanges, ViewEncapsulation,} from "@angular/core";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CoreSidebarService} from "../../../../../../@core/components/core-sidebar/core-sidebar.service";
import {VehiculeGpsLocationService} from "../vehicule-gps-location.service";
import {ChauffeurService} from "../../chauffeur/chauffeur.service";
import {AffaireService} from "../../affaire/affaire.service";
import {Chauffeur} from "../../models/chauffeur";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
    selector: "app-affectation-affaire-chauffeur",
    templateUrl: "./affectation-affaire-chauffeur.component.html",
    styleUrls: ["./affectation-affaire-chauffeur.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class AffectationAffaireChauffeurComponent implements OnInit {
    @Input() selectedVehicle: any;

    vehiculeGpsLocationId: number = 0;
    vehiculeName: string = '';
    chauffeurId: number = 0;
    costPerKm: number = 0.0;
    chauffeurs: Chauffeur[] = [];
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _coreSidebarService: CoreSidebarService,
        private vehiculeGpsLocationService: VehiculeGpsLocationService,
        private chauffeurService: ChauffeurService,
        private affaireService: AffaireService,
        private router: Router,
        private toastr: ToastrService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.loadChauffeurs();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedVehicle && this.selectedVehicle) {
            console.log("selectedVehicle changed:", this.selectedVehicle);
            this.vehiculeGpsLocationId = this.selectedVehicle.vehicleId || 0;
            this.vehiculeName = this.selectedVehicle.name || '';
            this.chauffeurId = this.selectedVehicle.chauffeur
                ? this.selectedVehicle.chauffeur.id || 0
                : 0;
            this.costPerKm = this.selectedVehicle.costPerKm || 0.0;
            console.log("vehiculeGpsLocationId:", this.vehiculeGpsLocationId);
            console.log("vehiculeName:", this.vehiculeName);
            console.log("chauffeurId:", this.chauffeurId);
            console.log("costPerKm:", this.costPerKm);
        }
    }

    toggleSidebar(name: string): void {
        console.log("Toggling sidebar:", name);
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }

    submitAssociation(): void {
        console.log("Request Payload:");
        console.log({
            vehiculeGpsLocationId: this.vehiculeGpsLocationId,
            chauffeurId: this.chauffeurId,
            costPerKm: this.costPerKm
        });

        if (this.vehiculeGpsLocationId && this.chauffeurId && this.costPerKm !== null) {
            this.vehiculeGpsLocationService.associateChauffeurAndPrice(this.vehiculeGpsLocationId, this.chauffeurId, this.costPerKm).then(
                    () => {
                        console.log("Association successful!");
                        this.toastrSuccess(); // Display Toastr notification here
                        this.router
                            .navigateByUrl("/", {skipLocationChange: true})
                            .then(() => {
                                this.router.navigate(["projets/logistique/vehicule/vehicule-list"]);
                            });
                        this.toggleSidebar("new-affectation-sidebar");
                    },
                    (error) => {
                        console.error("Error associating:", error);
                    }
                );
        } else {
            console.error("Please fill in all required fields.");
        }
    }

    toastrSuccess() {
        this.toastr.success('Association completed successfully.', 'Success!', {
            toastClass: 'toast ngx-toastr',
            closeButton: true
        });
    }


    private loadChauffeurs(): void {

        this.chauffeurService.onChauffeurListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(
            data => {
                this.chauffeurs = data;
            },
            (error) => {
                console.error("Error fetching chauffeurs:", error);
            });
        this.chauffeurService.getAllChauffeurs();

    }
}