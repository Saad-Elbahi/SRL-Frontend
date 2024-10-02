import {FromMouvement} from "./FromMouvement";
import {TripImputation} from "./TripImputation";
import {VehiculeGpsLocation} from "./vehicule-gps-location";

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
  constructor(init?: Partial<VehiculeRoute>) {
    Object.assign(this, init);
  }
}

