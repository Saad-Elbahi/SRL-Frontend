import {CoreMenu} from '@core/types';
import {Role} from "../main/authentication/models/role";

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [



    {
        id: 'logistique',
        type: 'section',
        title: 'Logistique',
        translate: 'MENU.LOGISTIQUE.SECTION',
        roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
        icon: 'package',
        children: [
            {
                id: 'dashboardM',
                title: 'Dashboard-Mouvement',
                translate: 'MENU.LOGISTIQUE.DASHBOARDMVT',
                type: 'item',
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: 'trello',
                url: 'projets/logistique/mouvementVh/dashboardM'
            },
            {
                id: 'mouvement',
                title: 'Mouvement',
                translate: 'MENU.LOGISTIQUE.MOUVEMENT',
                type: 'item',
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: 'slack',
                url: 'projets/logistique/mouvementVh/mouvement-list'
            },
            {
                id: 'recap',
                title: 'Recap Imputation',
                translate: 'MENU.LOGISTIQUE.RECAP',
                type: 'item',
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: 'slack',
                url: 'projets/logistique/mouvementVh/recap-imputation'
            },
            {
                id: 'vehicule',
                title: 'Vehicule',
                translate: 'MENU.LOGISTIQUE.VEHICULE',
                type: 'item',
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: 'truck',
                url: 'projets/logistique/vehicule/vehicule-list'
            },
            {
                id: "affaire",
                title: "Affaire",
                translate: "MENU.LOGISTIQUE.AFFAIRE",
                type: "item",
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: "file-text",
                url: "projets/logistique/affaire",
            },
            {
                id: 'chauffeur',
                title: 'Chauffeur',
                translate: 'MENU.LOGISTIQUE.CHAUFFEUR',
                type: 'item',
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: 'user',
                url: 'projets/logistique/chauffeur/chauffeur-list'
            },
            {
                id: 'fournisseur',
                title: 'Fournisseur',
                translate: 'MENU.LOGISTIQUE.FOURNISSEUR',
                type: 'item',
                roles: [Role.ADMIN,Role.PDG, Role.DGA ,Role.RESP_LOG,Role.ASSIST_LOG],
                icon: 'briefcase',
                url: 'projets/logistique/fournisseur'
            },
        ],
    },


];
