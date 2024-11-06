import { VehiculeRoute } from './../vehicule-route';
import {Client} from "../client";
import {Lot} from "../lot";
import {Soustraitant} from "../soustraitant";
import {Affaire} from "../affaire.model";
export class TripImputationResponseDTO {

    public affaire?: Affaire ;
    public soustraitant?: Soustraitant ;

    constructor(
        public id: number, 
        public affaireId: number,
        public affaireCode: string,
        public fillingPercentage: number,
        public observation: string,
        public client: Client,
        public lot: Lot,
        public subContractorId: number,
        public subContractorFullName: string,
        public costImputation: number,
        public vehiculeRoute?: VehiculeRoute ,

    ) {}
}
