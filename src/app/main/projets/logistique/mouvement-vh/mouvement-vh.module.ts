import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMouvementComponent} from "./dashboard-mouvement/dashboard-mouvement.component";
import { VehiculeMouvementListComponent } from './vehicule-mouvement-list/vehicule-mouvement-list.component';
import { VehiculeRouteAssociateComponent } from './vehicule-route-associate/vehicule-route-associate.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {ChartsModule} from "ng2-charts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CoreCommonModule} from "../../../../../@core/common.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {path: "dashboardM", component: DashboardMouvementComponent,},
  { path: "mouvement-list", component: VehiculeMouvementListComponent },
  { path: "association", component: VehiculeRouteAssociateComponent },
  { path: "", redirectTo: "mouvement-list", pathMatch: "full" },
  { path: "**", redirectTo: "mouvement-list" },
];

@NgModule({
    declarations: [
        DashboardMouvementComponent,
        VehiculeMouvementListComponent,
        VehiculeRouteAssociateComponent,],
    exports: [
        DashboardMouvementComponent
    ],
    imports: [
        CommonModule,
        NgApexchartsModule,
        RouterModule.forChild(routes),
        ChartsModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgxDatatableModule,
        CoreCommonModule,
        NgbDropdownModule
    ]
})
export class MouvementVhModule { }
