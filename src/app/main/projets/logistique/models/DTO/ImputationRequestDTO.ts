import {TripImputation} from "../TripImputation";

export class ImputationRequestDTO {
    vehiculeRouteId: number
    imputations: TripImputation[];


    constructor(vehiculeRouteId: number, imputations: TripImputation[]) {
        this.vehiculeRouteId = vehiculeRouteId;
        this.imputations = imputations;
    }
}
