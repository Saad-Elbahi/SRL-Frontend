import {Affaire} from "./EnginModels/Affaire";
import {VehiculeRoute} from "./vehicule-route";

export class TripImputation {
  id: number;
  affaire: Affaire;
  fillingPercentage: number; // % de remplissage
  observation: string;
  departement: string;
  costImputation: number;
  vehiculeRoute: VehiculeRoute;

  constructor(init?: Partial<TripImputation>) {
    Object.assign(this, init);
  }
}
