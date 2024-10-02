import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {VehiculeGpsLocation} from '../../models/vehicule-gps-location';
import {VehiculeGpsLocationService} from '../vehicule-gps-location.service';
import {CoreSidebarService} from '../../../../../../@core/components/core-sidebar/core-sidebar.service';
import Swal from 'sweetalert2';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as feather from 'feather-icons';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-vehicule-list',
    templateUrl: './vehicule-list.component.html',
    styleUrls: ['./vehicule-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VehiculeListComponent implements OnInit {
    public rows: VehiculeGpsLocation [] = [];
    public tempData: VehiculeGpsLocation [] = [];

    selectedOption:number = 15;
    public searchValue = '';
    public ColumnMode = ColumnMode;
    selectedVehicle: any;

    private _unsubscribeAll: Subject<any>;

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(
        private _coreSidebarService: CoreSidebarService,
        private vehiculeGpsLocationService: VehiculeGpsLocationService,
        private toastr: ToastrService,
        private router: Router,
    ) {
        this._unsubscribeAll = new Subject();

    }

    ngOnInit(): void {
        this.loadVehicles();
        feather.replace();
    }

    loadVehicles(): void {
        this.vehiculeGpsLocationService.onVehiculeListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(
            rep => {
                if (rep && rep.length > 0) {
                    this.rows = rep;
                    this.tempData = this.rows;
                }
            }, error => {
                console.error('Error fetching vehicles:', error);
            }
        )

        this.vehiculeGpsLocationService.getAllVehiculeGps();

        /*this.vehiculeGpsLocationService.getAllVehicule().subscribe(
          (vehicles) => {
            this.rows = vehicles;
            this.tempData = this.rows;
          },
          (error) => {
            console.error('Error fetching vehicles:', error);
          }
        );*/

    }

    addNewVehicule(): void {
        this.vehiculeGpsLocationService.saveVehiculeFromApi().then(() => {
            this.toastr.success('Vehicule added successfully!');
            console.log("vehicule added ")
            /*this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(["projets/mouvementVh/dashboardM"]);
            });*/
        });
    }

    filterUpdate(event): void {
        const val = event.target.value.toLowerCase();
        const temp = this.tempData.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
        this.table.offset = 0;
    }


    toggleSidebar(name: string, vehicle?: any): void {
        this.selectedVehicle = vehicle;
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }

    confirmDeleteVehicle(id: number): void {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteVehicule(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Not Cancelled',
                    text: 'Your Vehicle is safe :)',
                    icon: 'error',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                });
            }
        });
    }

    deleteVehicule(id: number): void {
        this.vehiculeGpsLocationService.deleteVehicule(id).then(() => {
           // this.loadVehicles();
            Swal.fire({
                title: 'Deleted!',
                text: 'The chauffeur has been deleted.',
                icon: 'success',
                customClass: {
                    confirmButton: 'btn btn-success'
                }
            });
        });
    }


}
