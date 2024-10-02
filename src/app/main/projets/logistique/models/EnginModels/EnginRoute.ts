import {EnginGpsLocation} from "./EnginGpsLocation";

export class EnginRoute {
    id: number;
    date: string;
    routeLength: number;
    drivesDuration: string;
    engineIdle: string;
    enginGpsLocation: EnginGpsLocation;
}
