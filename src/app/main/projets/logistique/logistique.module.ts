import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/main/authentication/auth.guards";
import { AffaireComponent } from "./VehiculeMouvement/affaire/affaire.component";
import { FournisseurComponent } from "./VehiculeMouvement/fournisseur/fournisseur.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule } from "@angular/forms";
import { CorePipesModule } from '@core/pipes/pipes.module';

const routes: Routes = [

    {path: "mouvementVh",
        loadChildren: () => import("./VehiculeMouvement/mouvement-vh/mouvement-vh.module").then((m) => m.MouvementVhModule),
        canActivate: [AuthGuard]
    },

    {path: "affaire", component: AffaireComponent},
    
    {path: "chauffeur",
        loadChildren: () => import("./VehiculeMouvement/chauffeur/chauffeur.module").then((m) => m.ChauffeurModule),
        canActivate: [AuthGuard]
    },
    

    {path: "fournisseur", component: FournisseurComponent},


    {path: "vehicule",
        loadChildren: () => import("./VehiculeMouvement/vehicule/vehicule.module").then((m) => m.VehiculeModule),
        canActivate: [AuthGuard]
    },

    //Mouvement Engin 
   
    {path: "mouvementEngin",
        loadChildren: () => import("./EngingMouvement/mouvement-engin/mouvement-engin.module").then((m) => m.MouvementEnginModule),
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
        CorePipesModule
    ]
})
export class LogistiqueModule {
}
