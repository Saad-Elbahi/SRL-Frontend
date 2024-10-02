import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {ColumnMode, DatatableComponent, SelectionType,} from "@swimlane/ngx-datatable";
import * as snippet from "../affaire/affaireTable";
import {FournisseurService} from "./fournisseur.service";
import * as feather from "feather-icons";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Fournisseur} from "../models/fournisseur";

@Component({
  selector: "app-fournisseur",
  templateUrl: "./fournisseur.component.html",
  styleUrls: ["./fournisseur.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class FournisseurComponent implements OnInit {
  selectedFournisseur: Fournisseur | null = null;
  rows: Fournisseur[] = [];
  temp: Fournisseur[] = [];

  // Properties for ngx-datatable configuration
  public contentHeader: any; // Adjust type as per your contentHeader object structure
  public chkBoxSelected: any[] = [];
  public SelectionType = SelectionType;
  public ColumnMode = ColumnMode;
  public basicSelectedOption: number = 15;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;

  // Snippets for demonstration purposes
  public _snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
  public _snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
  public _snippetCodeRowDetails = snippet.snippetCodeRowDetails;
  public _snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
  public _snippetCodeResponsive = snippet.snippetCodeResponsive;
  public _snippetCodeMultilangual = snippet.snippetCodeMultilangual;
  private _unsubscribeAll: Subject<any>;

  constructor(
      private fournisseurService: FournisseurService,
      private toastr: ToastrService,
      private router: Router) {

    this._unsubscribeAll = new Subject();


  }

  ngOnInit(): void {
    this.loadfournisseur();
    feather.replace();
  }

  loadfournisseur(): void {
    this.fournisseurService.onFournisseurListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(
        data => {
          if(data && data.length>0) {
            this.rows = data;
            this.temp = [...data];
          }
        });
    this.fournisseurService.getAllFournisseurs();
  }

  updateFilter(event: any): void {
    const val = event.target.value.toLowerCase();

    // Filter data based on temp (original data)
    const temp = this.temp.filter((d) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  deleteAffaire(id: number): void {
    this.fournisseurService.deleteFournisseur(id).subscribe(() => {
      this.loadfournisseur();
    });
  }

  addNewRecord(): void {
    this.fournisseurService.saveFournisseurFromApi().then(() => {
      this.toastr.success('Fournisseur added successfully!');
      //this.refreshPage();
    });
  }

  private refreshPage(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['projets/mouvementVh/dashboardM']);
    });
  }

  onSelect(event: any): void {
    console.log('Selected event:', event);
    if (event && event.selected && event.selected[0]) {
      const selectedFournisseur = event.selected[0];
    } else {
      console.error('Unexpected event data:', event);
    }
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
