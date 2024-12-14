import { Chauffeur } from "./chauffeur";
import { EnginRoute } from "./EnginRoute";

export class EnginGpsLocation {
  id: number;
  groupName: string;
  imei: string;
  name: string;
  device: string;
  model: string;
  coutH: number;
  plateNumber: string;
  chauffeur: Chauffeur[];
  enginRoutes: EnginRoute[];
}
