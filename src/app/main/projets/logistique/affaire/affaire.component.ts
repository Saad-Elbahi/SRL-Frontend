import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AffaireService} from "./affaire.service";
import {ToastrService} from "ngx-toastr";
import {Subject} from "rxjs";
import * as snippet from "./affaireTable";
import {Affaire} from "../models/affaire.model";
import {ColumnMode, DatatableComponent, SelectionType,} from "@swimlane/ngx-datatable";
import * as feather from "feather-icons";
import {takeUntil} from "rxjs/operators";

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

    // Properties for ngx-datatable configuration
    public contentHeader: any; // Adjust type as per your contentHeader object structure
    public chkBoxSelected: any[] = [];
    public SelectionType = SelectionType;
    public ColumnMode = ColumnMode;
    public basicSelectedOption: number = 15;

    public _unsubscribeAll: Subject<any>;

    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild("tableRowDetails") tableRowDetails: any;

    // Snippets for demonstration purposes
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
        /*  this.contentHeader = {
            headerTitle: "Affaire",
            actionButton: true,
            breadcrumb: {
              type: "",
              links: [
                {
                  name: "Home",
                  isLink: true,
                  link: "/",
                },
                {
                  name: "Affaire",
                  isLink: true,
                  link: "/",
                },
              ],
            },
          };*/
        feather.replace();
    }

    loadAffaires(): void {
        // Fetch all affaires and store them in `rows` and `temp` for ngx-datatable
        /* this.affaireService.getAffaires().subscribe((data: Affaire[]) => {
           this.rows = data;
           this.temp = [...data]; // Copy data to temp for filtering purposes
         });*/

        this.affaireService.onAffairesListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(data => {
            if (data) {
                this.rows = data;
                this.temp = [...data];
                console.log('Affaires')
                console.log(data)
            }
        });

        this.affaireService.getAllAffaire();
    }

    updateFilter(event: any): void {
        const val = event.target.value.toLowerCase();

        // Filter data based on temp (original data)
        const temp = this.temp.filter((d) => {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp; // Update rows to reflect filtered data
    }

    deleteAffaire(id: number): void {
        this.affaireService.deleteAffaire(id).subscribe(() => {
            this.loadAffaires(); // Reload affaires after deletion
        });
    }

    addNewAffaire(): void {

        this.affaireService.saveAffaireFromApi().then(
            () => {
                this.toastr.success("Affaire Char successfully!");

                console.log("vehicule added ");
                /*this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
                  this.router.navigate(["projets/mouvementVh/dashboardM"]);
                });*/
            });

    }

    onSelect(event: any): void {
        console.log(event)
        this.selectedAffaire = event.selected[0]; // Handle selection logic here
    }

    onActivate(event): void {
        // Handle activation events if needed
    }

    customChkboxOnSelect({selected}): void {
        this.chkBoxSelected = [...selected]; // Handle custom checkbox selection
    }

    rowDetailsToggleExpand(row): void {
        this.tableRowDetails.rowDetail.toggleExpandRow(row); // Toggle row details if required
    }

}
