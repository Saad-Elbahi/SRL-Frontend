import {Affaire} from "../EnginModels/Affaire";
import {Chauffeur} from "../EnginModels/Chauffeur";
import {EnginRoute} from "./EnginRoute";

export class EnginGpsLocation {
  id: number;
  groupName: string;
  imei: string;
  name?: string;
  device?: string;
  model?: string;
  coutH?: number;
  chauffeur?: Chauffeur;
  affaire?: Affaire;
  plateNumber: string;
  enginRoutes: EnginRoute[];
}
