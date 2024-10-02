import {Affaire} from "./EnginModels/Affaire";
import {Fournisseur} from "./fournisseur";
import {VehiculeGpsLocation} from "./vehicule-gps-location";
import {VehiculeRoute} from "./vehicule-route";

export class FromMouvement {
  id?: number;
  affaire?: Affaire;
  fournisseur?: Fournisseur;
  bl?: string;
  blMontant?: number;
  dateBl?: Date;
  departement?: string;
  toAffaire?: Affaire; // Updated to match backend
  vehiculeGpsLocation?: VehiculeGpsLocation;
  vehiculeRoute?: VehiculeRoute;

  constructor(init?: Partial<FromMouvement>) {
      Object.assign(this, init);
  }
}
