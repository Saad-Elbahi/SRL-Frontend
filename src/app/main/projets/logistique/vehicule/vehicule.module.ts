import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { AffectationAffaireChauffeurComponent } from './affectation-affaire-chauffeur/affectation-affaire-chauffeur.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule} from "@angular/forms";
import {CoreSidebarModule} from "../../../../../@core/components";
import {CoreCommonModule} from "../../../../../@core/common.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import {NgSelectModule} from "@ng-select/ng-select";


const routes: Routes = [
    {
        path: 'vehicule-list',
        component: VehiculeListComponent,
    },
    {
        path: 'affectation',
        component: AffectationAffaireChauffeurComponent,
    },
];


@NgModule({
  declarations: [
    VehiculeListComponent,
    AffectationAffaireChauffeurComponent
  ],
    imports: [
        CommonModule,
        NgxDatatableModule,
        RouterModule.forChild(routes),
        FormsModule,
        CoreSidebarModule,
        CoreCommonModule,
        NgbDropdownModule,
        NgSelectModule
    ]
})
export class VehiculeModule { }
