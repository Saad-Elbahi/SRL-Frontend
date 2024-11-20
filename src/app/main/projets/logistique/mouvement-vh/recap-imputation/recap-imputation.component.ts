import {AffaireService} from './../../affaire/affaire.service';
import {RecapImputationService} from "./recap-imputation.service";
import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ColumnMode} from "@swimlane/ngx-datatable";
import {TripImputation} from "../../models/TripImputation";
import {VehiculeRouteService} from "../vehicule-route.service";
import {VehiculeRoute} from "../../models/vehicule-route";
import {Subject} from "rxjs";
import {Client} from "../../models/client";
import {Lot} from "../../models/lot";
import {Soustraitant} from "../../models/soustraitant";
import {Affaire} from '../../models/affaire.model';
import {TripImputationDTO} from '../../models/DTO/TripImputationDTO';
import {TripImputationResponseDTO} from '../../models/DTO/TripImputationResponseDTO';

@Component({
    selector: "app-recap-imputation",
    templateUrl: "./recap-imputation.component.html",
    styleUrls: ["./recap-imputation.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class RecapImputationComponent implements OnInit {
    private _unsubscribeAll: Subject<any>;

    imputations: TripImputationResponseDTO[] = [];
    vehiculeRoutes: VehiculeRoute[] = [];
    filteredImputations: TripImputationResponseDTO[] = [];

    // Filter criteria
    isYearSelected: boolean = false;
    filterDate: string;
    filterVehiculeName: string;
    selectedYear: number;
    selectedMonth: number;
    selectedClient: Client;
    selectedLot: Lot;
    filterAffaire: Affaire;
    selectedSoustraitant: Soustraitant;
    filterMonth: number = new Date().getMonth() + 1;
    filterYear: string = new Date().getFullYear().toString();
    filterClient: Client;
    filterLot: Lot;

    months = [
        {value: 1, name: 'Janvier'},
        {value: 2, name: 'Fervrier'},
        {value: 3, name: 'Mars'},
        {value: 4, name: 'Avril'},
        {value: 5, name: 'Mai'},
        {value: 6, name: 'Juin'},
        {value: 7, name: 'Juillet'},
        {value: 8, name: 'Aout'},
        {value: 9, name: 'Septembre'},
        {value: 10, name: 'Octobre'},
        {value: 11, name: 'Novembre'},
        {value: 12, name: 'Décember'}
    ];

    years: number[] = [];
    clients: Client[] = [];
    lots: Lot[] = [];
    affaires: Affaire[] = [];
    soustraitants: Soustraitant[] = [];

    public ColumnMode = ColumnMode;

    constructor(
        private recapImputationService: RecapImputationService,
        private vehiculeRouteService: VehiculeRouteService,
        private affaireService: AffaireService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.initializeYears();
        this.loadData();
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 10; i--) {
            this.years.push(i);
        }
        console.log(this.filterYear);
        console.log(this.filterMonth);

        this.filteredImputations = this.imputations;
    }

    loadData(): void {
        this.recapImputationService.getAllImputation().then(
            (imputations) => {
                this.imputations = Array.isArray(imputations) ? imputations : [];
                this.filteredImputations = this.imputations;
                this.filterData();
            },
            (error) => console.error("Error loading imputations:", error)
        );

        this.loadClients();
        this.loadLots();
        this.loadAffaires();
    }

    initializeYears(): void {
        const currentYear = new Date().getFullYear();
        this.years = Array.from({length: 10}, (_, i) => currentYear - i);
    }

    loadClients(): void {
        this.vehiculeRouteService.getAllClients().then(
            (clients) => (this.clients = Array.isArray(clients) ? clients : []),
            (error) => console.error("Error loading clients:", error)
        );
    }

    loadLots(): void {
        this.vehiculeRouteService.getAllLots().then(
            (lots) => (this.lots = Array.isArray(lots) ? lots : []),
            (error) => console.error("Error loading lots:", error)
        );
    }

    loadAffaires(): void {
        this.affaireService.getAffaires().then(
            (affaires) => (this.affaires = Array.isArray(affaires) ? affaires : []),
            (error) => console.error("Error loading affaires:", error)
        );
    }

    onAffaireChanged(): void {
        this.soustraitants = [];
        console.log(this.filterAffaire)
        this.soustraitants = [];
        if (this.filterAffaire) {
            this.vehiculeRouteService.getSoustraitants(this.filterAffaire.id)
                .then((data: Soustraitant[]) => {
                    this.soustraitants = data;
                    this.selectedSoustraitant = null;
                })
                .catch((error) => console.error("Error loading soustraitants:", error));
        }

        this.filterData();
    }

    getSoustraitants(projectId: number): void {
        this.vehiculeRouteService.getSoustraitants(projectId).then(
            (soustraitants) => (this.soustraitants = Array.isArray(soustraitants) ? soustraitants : []),
            (error) => console.error("Error loading soustraitants:", error)
        );
    }

    onYearSelect(): void {
        this.isYearSelected = !!this.filterYear;
        //this.filterMonth = null;
        this.filterData();
    }


    filterData(): void {
        this.filteredImputations = this.imputations.filter(item => {
            console.log(item)

            const itemDate = new Date(item.vehiculeRoute.date);
            const itemYear: string = itemDate.getFullYear().toString();
            // const itemMonth:string = ('0' + (itemDate.getMonth() + 1)).slice(-2);
            const itemMonth: number = itemDate.getMonth() + 1;

            const affaireMatch = this.filterAffaire ? item.affaireId == this.filterAffaire.id : true;
            const clientMatch = this.filterClient ? item.client.id == this.filterClient.id : true;
            const LottMatch = this.filterLot ? item.lot.id == this.filterLot.id : true;
            const soustraitantMatch = this.selectedSoustraitant ? item.subContractorId == this.selectedSoustraitant.id : true;


            // const dateMatch = this.filterDate ? itemDate.toISOString().split('T')[0] === this.filterDate : true;
            const monthMatch = this.filterMonth ? itemMonth == this.filterMonth : true;
            const yearMatch = this.filterYear ? itemYear == this.filterYear : true;

            return yearMatch && monthMatch && affaireMatch && clientMatch && LottMatch && soustraitantMatch;
        });
    }

    getTotalCostImputation(): number {
        return this.filteredImputations.reduce(
            (total, imputation) => total + (imputation.costImputation || 0),
            0
        );
    }


}
