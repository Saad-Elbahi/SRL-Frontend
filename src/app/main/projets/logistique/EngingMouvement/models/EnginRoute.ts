import { EnginGpsLocation } from "./EnginGpsLocation";

export class EnginRoute {
    id: number;
    date: string;
    routeLength: number;
    drivesDuration: string;
    engineIdle: string;
    rendement:string;
    nbrH : number;
    montant: number;
    imputationStatus?: boolean;
    enginGpsLocation: EnginGpsLocation;
    constructor(init?: Partial<EnginRoute>) {
        Object.assign(this, init);
      }
}
