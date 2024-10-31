import { RecapImputationService } from "./recap-imputation.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { TripImputation } from "../../models/TripImputation";
import { VehiculeRouteService } from "../vehicule-route.service";
import { VehiculeRoute } from "../../models/vehicule-route";
import { Subject } from "rxjs";
import { Client } from "../../models/client";
import { Lot } from "../../models/lot";
import { Soustraitant } from "../../models/soustraitant";

@Component({
  selector: "app-recap-imputation",
  templateUrl: "./recap-imputation.component.html",
  styleUrls: ["./recap-imputation.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class RecapImputationComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;

  imputations: TripImputation[] = [];
  vehiculeRoutes: VehiculeRoute[] = [];
  filteredRoutes: VehiculeRoute[] = [];
  filteredImputations: TripImputation[] = [];
  public ColumnMode = ColumnMode;

  selectedMonth: number | null = null;
  selectedYear: number | null = null;
  selectedClient: number | null = null;
  selectedLot: number | null = null;
  selectedSoustraitant: number | null = null;

  months = [
    { name: "Janvier", value: 1 },
    { name: "Février", value: 2 },
    { name: "Mars", value: 3 },
    { name: "Avril", value: 4 },
    { name: "Mai", value: 5 },
    { name: "Juin", value: 6 },
    { name: "Juillet", value: 7 },
    { name: "Août", value: 8 },
    { name: "Septembre", value: 9 },
    { name: "Octobre", value: 10 },
    { name: "Novembre", value: 11 },
    { name: "Décembre", value: 12 },
  ];

  years: number[] = [];
  clients: Client[] = [];
  lots: Lot[] = [];
  soustraitants: Soustraitant[] = [];

  constructor(
    private recapImputationService: RecapImputationService,
    private vehiculeRouteService: VehiculeRouteService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.initializeYears();
    this.loadData();
  }

  loadData(): void {
    this.recapImputationService.getAllImputation().then(
      (imputations) => {
        this.imputations = Array.isArray(imputations) ? imputations : [];
        console.log('Loaded Imputations:', this.imputations);
        this.filteredImputations = this.imputations;
      },
      (error) => {
        console.error("Error loading imputations:", error);
      }
    );
  
  

    this.loadClients();
    this.loadLots();
   // this.loadSoustraitants();
  }

  initializeYears(): void {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 10 }, (_, i) => currentYear - i);
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

 /*  loadSoustraitants(): void {
    this.vehiculeRouteService.getSoustraitants().then(
      (soustraitants) =>
        (this.soustraitants = Array.isArray(soustraitants)
          ? soustraitants
          : []),
      (error) => console.error("Error loading soustraitants:", error)
    );
  }
 */
  applyFilters(): void {
    console.log('Applying filters:', {
      selectedMonth: this.selectedMonth,
      selectedYear: this.selectedYear,
      selectedClient: this.selectedClient,
      selectedLot: this.selectedLot,
      selectedSoustraitant: this.selectedSoustraitant,
    });
  
    this.filteredImputations = this.imputations.filter((imputation) => {
      const date = imputation.vehiculeRoute?.date ? new Date(imputation.vehiculeRoute.date) : null;
  
      const matchesMonth = !this.selectedMonth || (date && date.getMonth() + 1 === this.selectedMonth);
      const matchesYear = !this.selectedYear || (date && date.getFullYear() === this.selectedYear);
      const matchesClient = !this.selectedClient || imputation.client?.id === this.selectedClient;
      const matchesLot = !this.selectedLot || imputation.lot?.id === this.selectedLot;
      const matchesSoustraitant = !this.selectedSoustraitant || imputation.soustraitant?.id === this.selectedSoustraitant;
  
      return matchesMonth && matchesYear && matchesClient && matchesLot && matchesSoustraitant;
    });
  
    console.log('Filtered Imputations:', this.filteredImputations);
  }
  
  
}
