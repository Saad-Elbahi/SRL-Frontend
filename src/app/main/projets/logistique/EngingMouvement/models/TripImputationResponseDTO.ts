
import { Affaire } from "../../VehiculeMouvement/models/EnginModels/Affaire";
import { EnginRoute } from "../models/EnginRoute";

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
        public enginRoute?: EnginRoute ,
        public  isValidated?: boolean,

    ) {}
}
