import { FromMouvement } from "./FromMouvement";
import { TripImputation } from "./TripImputation";
import { VehiculeGpsLocation } from "./vehicule-gps-location";

export class VehiculeRoute {
  id?: number;
  date?: Date;
  routeLength?: number;
  fromMouvements?: FromMouvement[];
  costPerTrip?: number;
  vehiculeGpsLocation?: VehiculeGpsLocation;
  imputations?: TripImputation[];
  fillingPercentage?: number;
  fillingCost?: number;
  fromStatus?: boolean;
  imputationStatus?: boolean;
  constructor(init?: Partial<VehiculeRoute>) {
    Object.assign(this, init);
  }
  isEditing?: boolean; 
}
