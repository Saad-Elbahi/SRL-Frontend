import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AffaireService} from "./affaire.service";
import {ToastrService} from "ngx-toastr";
import {Subject} from "rxjs";
import * as snippet from "./affaireTable";
import {ColumnMode, DatatableComponent, SelectionType,} from "@swimlane/ngx-datatable";
import * as feather from "feather-icons";
import {takeUntil} from "rxjs/operators";
import { Affaire } from '../models/affaire.model';

@Component({
    selector: 'app-affaire',
    templateUrl: './affaire.component.html',
    styleUrls: ['./affaire.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AffaireComponent implements OnInit {
    affaires: Affaire[] = [];
    selectedAffaire: Affaire | null = null;
    rows: Affaire[] = [];
    temp: Affaire[] = [];

    public contentHeader: any; 
    public chkBoxSelected: any[] = [];
    public SelectionType = SelectionType;
    public ColumnMode = ColumnMode;
    public basicSelectedOption: number = 15;

    public _unsubscribeAll: Subject<any>;

    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild("tableRowDetails") tableRowDetails: any;
  
    codeFilter: string = ""; 


    public _snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
    public _snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
    public _snippetCodeRowDetails = snippet.snippetCodeRowDetails;
    public _snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
    public _snippetCodeResponsive = snippet.snippetCodeResponsive;
    public _snippetCodeMultilangual = snippet.snippetCodeMultilangual;

    constructor(
        private affaireService: AffaireService,
        private toastr: ToastrService,
        private router: Router
    ) {
        this._unsubscribeAll = new Subject();

    }

    ngOnInit(): void {
        this.loadAffaires();
       
        feather.replace();
    }

    loadAffaires(): void {
        this.affaireService.onAffairesListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(data => {
            if (data) {
                this.rows = Array.from(data); 
                this.temp = Array.from(data); 
                console.log('Affaires', data);
            }
        });
    
        this.affaireService.getAllAffaire();
    }
    
    

    updateFilter(event: any): void {
        const val = event.target.value.toLowerCase();
    
        const temp = this.temp.filter((d) => {
            return d.villeintitule.toLowerCase().indexOf(val) !== -1 ||
                   d.code.toLowerCase().indexOf(val) !== -1 ||
                   d.typeProjet.toLowerCase().indexOf(val) !== -1 ||
                   d.chefZoneFullName.toLowerCase().indexOf(val) !== -1 ||
                   d.chefZoneUsername.toLowerCase().indexOf(val) !== -1 || 
                   !val; 
        });
    
        this.rows = temp; 
    }
    

    deleteAffaire(id: number): void {
        this.affaireService.deleteAffaire(id).subscribe(() => {
            this.loadAffaires(); 
        });
    }

    addNewAffaire(): void {

        this.affaireService.getAffaires().then(
            () => {
                this.toastr.success("Affaire chargée avec succès !");

                console.log("vehicule added ");
                /*this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
                  this.router.navigate(["projets/mouvementVh/dashboardM"]);
                });*/
            });

    }

    onSelect(event: any): void {
        console.log(event)
        this.selectedAffaire = event.selected[0]; 
    }

    onActivate(event): void {
    }

    customChkboxOnSelect({selected}): void {
        this.chkBoxSelected = [selected]; 
    }

    rowDetailsToggleExpand(row): void {
        this.tableRowDetails.rowDetail.toggleExpandRow(row); 
    }

    
}
