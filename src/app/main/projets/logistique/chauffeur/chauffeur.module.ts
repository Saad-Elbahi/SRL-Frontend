import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChauffeurEditComponent} from "./chauffeur-edit/chauffeur-edit.component";
import {ChauffeurListComponent} from "./chauffeur-list/chauffeur-list.component";
import {ChauffeurViewComponent} from "./chauffeur-view/chauffeur-view.component";
import {RouterModule, Routes} from "@angular/router";
import {NgbDropdownModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CoreSidebarModule} from "../../../../../@core/components";
import { NewChauffeurSidebarComponent } from './new-chauffeur-sidebar/new-chauffeur-sidebar.component';
import {FormsModule} from "@angular/forms";
import {CoreDirectivesModule} from "../../../../../@core/directives/directives";
import {CorePipesModule} from "../../../../../@core/pipes/pipes.module";


const routes: Routes = [
  { path: 'chauffeur-list', component: ChauffeurListComponent },
  { path: 'chauffeur-edit/:id', component: ChauffeurEditComponent, data: { animation: 'ChauffeurEditComponent' }},
  { path: 'chauffeur-view/:id', component: ChauffeurViewComponent ,    data: { animation: 'ChauffeurViewComponent' }},
  { path: '', redirectTo: 'chauffeur-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'chauffeur-list' }
];

@NgModule({
  declarations: [
    ChauffeurEditComponent,
    ChauffeurListComponent,
    ChauffeurViewComponent,
    NewChauffeurSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbNavModule,
    NgxDatatableModule,
    CoreSidebarModule,
    RouterModule,
    FormsModule,
    NgbDropdownModule,
    CoreDirectivesModule,
    CorePipesModule,
  ]
})
export class ChauffeurModule { }
