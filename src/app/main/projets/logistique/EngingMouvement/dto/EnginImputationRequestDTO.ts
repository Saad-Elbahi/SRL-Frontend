import { EnginRoute } from "../models/EnginRoute";

export class EnginImputationRequestDTO {
    constructor(
        public id: number,
        public enginRouteId: number,
        public affaireId: number,
        public affaireCode: string,
        public nbrHImputation: number,
        public observation: string,
        public clientId: number, 
        public lotId: number, 
        public subContractorId: number,
        public subContractorFullName: string,
        public costImputation: number,
        public isNew?: boolean,
        public enginRoute?: EnginRoute ,
        public isSaved?: boolean
    ) {}
}
