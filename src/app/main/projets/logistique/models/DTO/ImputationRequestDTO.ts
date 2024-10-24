import { TripImputation } from "../TripImputation";
import { TripImputationDTO } from "./TripImputationDTO";

export class ImputationRequestDTO {
vehiculeRouteId: number;
  imputations: TripImputationDTO[];

  constructor(vehiculeRouteId: number, imputations: TripImputationDTO[]) {
    this.vehiculeRouteId = vehiculeRouteId;
    this.imputations = imputations;
  }
}
