import { VehiculeRoute } from './../vehicule-route';
export class TripImputationRequestDTO {
    constructor(
        public id: number,
        public vehiculeRouteId: number,
        public affaireId: number,
        public affaireCode: string,
        public fillingPercentage: number,
        public observation: string,
        public clientId: number, 
        public lotId: number, 
        public subContractorId: number,
        public subContractorFullName: string,
        public costImputation: number,
        public isNew?: boolean,
        public vehiculeRoute?: VehiculeRoute ,
        public isSaved?: boolean
    ) {}
}
