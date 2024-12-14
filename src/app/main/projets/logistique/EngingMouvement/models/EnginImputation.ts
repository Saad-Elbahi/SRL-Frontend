import { Client } from "../../VehiculeMouvement/models/client";

import { Lot } from "../../VehiculeMouvement/models/lot";
import { Soustraitant } from "../../VehiculeMouvement/models/soustraitant";
import { Affaire } from "./affaire.model";
import { EnginRoute } from "./EnginRoute";

export class EnginImputation {
    id: number;
    affaire: Affaire;
    nbrHImputation: number; 
    observation: string;
    client: Client;
    lot: Lot;
    soustraitant: Soustraitant;
    costImputation: number;
    enginRoute: EnginRoute;
  constructor(
    id:number=0,
    affaire: Affaire = null, 
    nbrHImputation: number = 0, 
    observation: string = "", 
    client: Client = null, 
    lot: Lot = null,
    soustraitant: Soustraitant = null, 
    costImputation: number = 0, 
    enginRoute: EnginRoute = null 
  ){
    this.id = id;
    this.affaire = affaire;
    this.nbrHImputation = nbrHImputation;
    this.observation = observation;
    this.client = client;
    this.lot = lot;
    this.soustraitant = soustraitant;
    this.costImputation = costImputation;
    this.enginRoute = enginRoute;
  }
}
