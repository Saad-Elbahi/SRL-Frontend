import { AffaireService } from './../../affaire/affaire.service';
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
import { Affaire } from '../../models/affaire.model';
import { TripImputationDTO } from '../../models/DTO/TripImputationDTO';
import { TripImputationResponseDTO } from '../../models/DTO/TripImputationResponseDTO';

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
  filterAffaire: string = '';
  selectedSoustraitant: Soustraitant;
  filterMonth: string = '';
  filterYear: string = '';
  filterClient: string=''
  filterLot:string='';

  months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }
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

    this.filteredImputations = this.imputations;
  }

  loadData(): void {
    this.recapImputationService.getAllImputation().then(
      (imputations) => {
        this.imputations = Array.isArray(imputations) ? imputations : [];
        this.filteredImputations = this.imputations;
      },
      (error) => console.error("Error loading imputations:", error)
    );

    this.loadClients();
    this.loadLots();
    this.loadAffaires();
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

  loadAffaires(): void {
    this.affaireService.getAffaires().then(
      (affaires) => (this.affaires = Array.isArray(affaires) ? affaires : []),
      (error) => console.error("Error loading affaires:", error)
    );
  }

/*   onAffaireChanged(affaire: Affaire): void {
    this.soustraitants = [];
    this.filterAffaire = affaire.code; 

    this.vehiculeRouteService
      .getSoustraitants(affaire.id)
      .then((data: Soustraitant[]) => {
        this.soustraitants = data;
        this.selectedSoustraitant = null; 
      })
      .catch((error) => console.error("Error loading soustraitants:", error));
    
    this.filterData(); 
  } */

  getSoustraitants(projectId: number): void {
    this.vehiculeRouteService.getSoustraitants(projectId).then(
      (soustraitants) => (this.soustraitants = Array.isArray(soustraitants) ? soustraitants : []),
      (error) => console.error("Error loading soustraitants:", error)
    );
  }
  onYearSelect(): void {
    this.isYearSelected = !!this.filterYear;
    this.filterMonth = ''; 
    this.filterData(); 
  }


  filterData(): void {
    this.filteredImputations = this.imputations.filter(item => {
      const itemDate = new Date(item.vehiculeRoute.date);
      const itemYear = itemDate.getFullYear().toString();
      const itemMonth = ('0' + (itemDate.getMonth() + 1)).slice(-2);
      const affaireMatch = this.filterAffaire ? item.affaireCode === this.filterAffaire : true;
      const clientMatch=this.filterClient ? item.client.name === this.filterClient:true;
      const LottMatch=this.filterLot ? item.lot.name === this.filterLot:true;
      const soustraitantMatch = this.selectedSoustraitant ? item.soustraitant === this.selectedSoustraitant : true;


      const dateMatch = this.filterDate ? itemDate.toISOString().split('T')[0] === this.filterDate : true;
      const monthMatch = this.filterMonth ? itemMonth === this.filterMonth : true;
      const yearMatch = this.filterYear ? itemYear === this.filterYear : true;

      return dateMatch && monthMatch && yearMatch && affaireMatch && clientMatch && LottMatch && soustraitantMatch;
    });
  }
  
  getTotalCostImputation(): number {
    return this.filteredImputations.reduce(
      (total, imputation) => total + (imputation.costImputation || 0),
      0
    );
  }
  
}
