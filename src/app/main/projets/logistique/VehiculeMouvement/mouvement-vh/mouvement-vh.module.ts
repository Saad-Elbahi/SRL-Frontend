import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from "@angular/router";
import { DashboardMouvementComponent } from "./dashboard-mouvement/dashboard-mouvement.component";
import { VehiculeMouvementListComponent } from "./vehicule-mouvement-list/vehicule-mouvement-list.component";
import { VehiculeRouteAssociateComponent } from "./vehicule-route-associate/vehicule-route-associate.component";
import { RecapImputationComponent } from "./recap-imputation/recap-imputation.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreCommonModule } from '@core/common.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerI18nModule } from 'app/main/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module';

const routes: Routes = [
  {path: "dashboardM", component: DashboardMouvementComponent,},
  { path: "mouvement-list", component: VehiculeMouvementListComponent },
  { path: "association", component: VehiculeRouteAssociateComponent },
  { path: "recap-imputation", component: RecapImputationComponent },
  { path: "", redirectTo: "mouvement-list", pathMatch: "full" },
  { path: "**", redirectTo: "mouvement-list" },
];

@NgModule({
    declarations: [
        DashboardMouvementComponent,
        VehiculeMouvementListComponent,
        VehiculeRouteAssociateComponent,
        RecapImputationComponent,],
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
        NgbDropdownModule,
        DatePickerI18nModule
    ]
})
export class MouvementVhModule { }
