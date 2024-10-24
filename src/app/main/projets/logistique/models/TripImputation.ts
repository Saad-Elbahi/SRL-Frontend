
import { Affaire } from "./affaire.model";
import { Client } from "./client";
import { Lot } from "./lot";
import { Soustraitant } from "./soustraitant";
import {VehiculeRoute} from "./vehicule-route";

export class TripImputation {
  id: number;
  affaire: Affaire;
  fillingPercentage: number; 
  observation: string;
  client: Client;
  lot: Lot;
  soustraitant: Soustraitant;
  costImputation: number;
  vehiculeRoute: VehiculeRoute;

  constructor(
    id: number = 0, 
    affaire: Affaire = null, 
    fillingPercentage: number = 0, 
    observation: string = "", 
    client: Client = null, 
    lot: Lot = null,
    soustraitant: Soustraitant = null, 
    costImputation: number = 0, 
    vehiculeRoute: VehiculeRoute = null 
  ) {
    this.id = id;
    this.affaire = affaire;
    this.fillingPercentage = fillingPercentage;
    this.observation = observation;
    this.client = client;
    this.lot = lot;
    this.soustraitant = soustraitant;
    this.costImputation = costImputation;
    this.vehiculeRoute = vehiculeRoute;
  }
}
