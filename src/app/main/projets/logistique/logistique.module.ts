import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AffaireComponent } from './affaire/affaire.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {CardSnippetModule} from "../../../../@core/components/card-snippet/card-snippet.module";
import {ContentHeaderModule} from "../../../layout/components/content-header/content-header.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../../authentication/auth.guards";

const routes: Routes = [

    {path: "mouvementVh",
        loadChildren: () => import("./mouvement-vh/mouvement-vh.module").then((m) => m.MouvementVhModule),
        canActivate: [AuthGuard]
    },

    {path: "affaire", component: AffaireComponent},

    {path: "chauffeur",
        loadChildren: () => import("./chauffeur/chauffeur.module").then((m) => m.ChauffeurModule),
        canActivate: [AuthGuard]
    },

    {path: "fournisseur", component: FournisseurComponent},


    {path: "vehicule",
        loadChildren: () => import("./vehicule/vehicule.module").then((m) => m.VehiculeModule),
        canActivate: [AuthGuard]
    },

];

@NgModule({
    declarations: [
        AffaireComponent,
        FournisseurComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardSnippetModule,
        ContentHeaderModule,
        NgxDatatableModule,
        FormsModule,
    ]
})
export class LogistiqueModule {
}
