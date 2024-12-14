import {CoreMenu} from '@core/types';
import {Role} from "../main/authentication/models/role";

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [



    {
        id: 'logistique',
        type: 'section',
        title: 'Logistique',
        translate: 'MENU.LOGISTIQUE.SECTION',
        roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
        icon: 'package',
        children: [
          {
            id: 'mouvementJournalier',
            type: 'collapsible',
            title: 'Mouvement Vehicule',
            translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER',
            roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
            icon: 'truck', 
            children: [
              {
                id: 'dashboardM',
                title: 'Dashboard-Mouvement',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.DASHBOARDMVT',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'trello',
                url: 'projets/logistique/mouvementVh/dashboardM',
              },
              {
                id: 'mouvement',
                title: 'Mouvement Véhicule',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.MOUVEMENT',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'slack',
                url: 'projets/logistique/mouvementVh/mouvement-list',
              },
              {
                id: 'recap',
                title: 'Recap Imputation',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.RECAP',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'slack',
                url: 'projets/logistique/mouvementVh/recap-imputation',
              },
              {
                id: 'vehicule',
                title: 'Vehicule',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.VEHICULE',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'truck',
                url: 'projets/logistique/vehicule/vehicule-list',
              },
              {
                id: 'affaire',
                title: 'Affaire',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.AFFAIRE',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'file-text',
                url: 'projets/logistique/affaire',
              },
              {
                id: 'chauffeur',
                title: 'Chauffeur',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.CHAUFFEUR',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'user',
                url: 'projets/logistique/chauffeur/chauffeur-list',
              },
              {
                id: 'fournisseur',
                title: 'Fournisseur',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT_JOURNALIER.FOURNISSEUR',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'briefcase',
                url: 'projets/logistique/fournisseur',
              },
            ],
          },
          {
            id: 'RendementEngin',
            type: 'collapsible',
            title: 'Mouvement Engin',
            translate: 'MENU.LOGISTIQUE.ENGIN',
            roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
            icon: 'sliders',
            children:[
              {
                id: 'enginMouvement',
                title: 'Mouvement Engin ',
                translate: 'MENU.LOGISTIQUE.ENGIN.MOUVEMENT',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'slack',
                url: 'projets/logistique/mouvementEngin/engin-mouvement',
              },
              {
                id: 'engin',
                title: 'Engin',
                translate: 'MENU.LOGISTIQUE.ENGIN.MACHINE',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'truck',
                url: 'projets/logistique/mouvementEngin/engin-list',
              },
              {
                id: 'chauffeur',
                title: 'Chauffeur',
                translate: 'MENU.LOGISTIQUE.ENGIN.CHAUFFEUR',
                type: 'item',
                roles: [Role.ADMIN, Role.PDG, Role.DGA, Role.RESP_LOG, Role.ASSIST_LOG],
                icon: 'user',
                url: 'projets/logistique/mouvementEngin/chauffeur/chauffeur-list',
              },

            ]
        }        
        ],
      },
    


];
