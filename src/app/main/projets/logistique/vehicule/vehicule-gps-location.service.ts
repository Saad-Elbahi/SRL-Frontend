import {Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {SrManagerService} from "../../sr-manager.service";

@Injectable({
    providedIn: "root",
})
export class VehiculeGpsLocationService {

    public onVehiculeListChanged: BehaviorSubject<any>;

    constructor(private srManagerService: SrManagerService) {
        // @ts-ignore
        this.onVehiculeListChanged = new BehaviorSubject<any>();
    }

    getAllVehiculeGps(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            let url = environment.vhgpsapi + '/getAllVehiculeGps';
            this.srManagerService.getResources(url).subscribe(
                (response: any[]) => {
                    this.onVehiculeListChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    saveVehiculeFromApi(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            let url = environment.vhgpsapi + '/saveVehiculeFromApi';
            this.srManagerService.getResources(url).subscribe(
                (response: any[]) => {
                    this.onVehiculeListChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    getVehiculeCount() {
        return this.srManagerService.getResources(`${environment.vhgpsapi}/getVehiculeGps`)
    }


    associateChauffeurAndPrice(id: number, chauffeurId: number, costPerKm: number): Promise<any[]> {

        let url = environment.vhgpsapi + '/associateChauffeurAndPrice';
        const body = {
            vehiculeId: id,
            chauffeurId: chauffeurId,
            costPerKm: costPerKm
        };

        return new Promise((resolve, reject) => {

            this.srManagerService.postRessource(url, body).subscribe(
                (response: any[]) => {
                    this.onVehiculeListChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }


    deleteVehicule(id: number): Promise<any[]> {
        let url = environment.vhgpsapi + '/deleteVehicule/' + id;

        return new Promise((resolve, reject) => {
            this.srManagerService.deleteRessource(url).subscribe(
                (response: any[]) => {
                    this.onVehiculeListChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }


}
