import { Affaire } from "../models/affaire.model";
import { Client } from "../models/client";
import { EnginRoute } from "../models/EnginRoute";
import { Lot } from "../models/lot";
import { Soustraitant } from "../models/soustraitant";

export class EnginImputationResponseDTO {

    public affaire?: Affaire ;
    public soustraitant?: Soustraitant ;

    constructor(
        public id: number, 
        public affaireId: number,
        public affaireCode: string,
        public nbrHImputation: number,
        public observation: string,
        public client: Client,
        public lot: Lot,
        public subContractorId: number,
        public subContractorFullName: string,
        public costImputation: number,
        public enginRoute?: EnginRoute ,
        public  isValidated?: boolean,

    ) {}
}
