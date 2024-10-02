import {Injectable} from '@angular/core';
import {SelectYear} from "../models/select-year";
import {SelectMonth} from "../models/select-month";
import {SelectModeTravail} from "../models/select-mode-travail";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Param} from "../models/param";
import {ParamType} from "../models/param-type";
import {SelectSubContractorCategorie} from "../models/select-sub-contractor-categorie";
import {SelectSubContractorStatus} from "../models/select-sub-contractor-status";
import {SrManagerService} from "../../projets/sr-manager.service";
import {SelectSituationStatus} from "../models/select-situation-status";
import {SelectSousTraitanceStatus} from "../models/select.sous-traitance-status";
import {SelectMoyenPaiement} from "../models/select-moyen-paiement";
import {MoyenPaiement} from "../models/moyen-paiement";
import {SelectAccountMvtStatus} from "../models/select-account-mvt-status";
import {SelectSoldeStatus} from "../models/select-solde-status";
import {SelectEcheance} from "../models/select-echeance";
import {SelectEngagementStatus} from "../models/select-engagement-status";
import {SelectLigneRegistreCaisseStatus} from "../models/select-ligne-registre-caisse-status";
import {SelectTypeOperationCaisseStatus} from "../models/select-type-operation-caisse-status";
import {SelectSourceAlimentation} from "../models/select-source-alimentation";
import {SelectImputation} from "../models/select-imputation";
import {CreateParamRequestDTO} from "../models/CreateParamRequestDTO";

@Injectable({
    providedIn: 'root'
})
export class ParamsService {

    public onUniteListChanged: BehaviorSubject<any>;

    constructor(private srManagerService: SrManagerService) {
        this.onUniteListChanged = new BehaviorSubject({});

    }

    getYears(): SelectYear[] {
        let years: SelectYear[] = [];
        let firstYear = 2021;
        //years.push({name: firstYear.toString(), value: firstYear});

        let currentYear: number = new Date().getFullYear();

        for (let i = firstYear; i <= currentYear+1; i++) {
            let year: SelectYear = {name: i.toString(), value: i}
            years.push(year);
        }
        return years;
    }

    getMonths(): SelectMonth[] {
        return [
            {name: 'JANVIER', value: 1},
            {name: 'FEVRIER', value: 2},
            {name: 'MARS', value: 3},
            {name: 'AVRIL', value: 4},
            {name: 'MAI', value: 5},
            {name: 'JUIN', value: 6},
            {name: 'JUILLET', value: 7},
            {name: 'AOUT', value: 8},
            {name: 'SEPTEMBRE', value: 9},
            {name: 'OCTOBRE', value: 10},
            {name: 'NOVEMBRE', value: 11},
            {name: 'DECEMBRE', value: 12},
        ];
    }


}
