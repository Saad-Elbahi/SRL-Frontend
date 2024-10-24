import { VehiculeRoute } from './../vehicule-route';
export class TripImputationDTO {
    constructor(
        public id: number, 
        public affaireId: number,
        public fillingPercentage: number,
        public observation: string,
        public clientId: number, 
        public lotId: number, 
        public soustraitantId: number, 
        public costImputation: number,
        public isNew?: boolean,
        public vehiculeRoute?: VehiculeRoute 
    ) {}
}
