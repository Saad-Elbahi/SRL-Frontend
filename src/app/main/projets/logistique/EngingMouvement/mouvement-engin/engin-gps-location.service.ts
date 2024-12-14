import { Injectable } from "@angular/core";
import { SrManagerService } from "app/main/projets/sr-manager.service";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { EnginGpsLocationDTO } from "../dto/EnginGpsLocationDTO";

@Injectable({
  providedIn: "root",
})
export class EnginGpsLocationService {
  public onEnginListChanged: BehaviorSubject<any>;
  constructor(private srManagerService: SrManagerService) {
    // @ts-ignore
    this.onEnginListChanged = new BehaviorSubject<any>();
  }

  getAllEnginGps(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      let url = environment.EnginGpsapi + "/getAllEnginGps";
      this.srManagerService.getResources(url).subscribe((response: any[]) => {
        this.onEnginListChanged.next(response);
        resolve(response);
      }, reject);
    });
  }
  
  saveEnginFromApi(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      let url = environment.EnginGpsapi + "/saveLocations";
      this.srManagerService.getResources(url).subscribe((response: any[]) => {
        this.onEnginListChanged.next(response);
        resolve(response);
      }, reject);
    });
  }
  AddEnginLocation(
    chauffeurId: number,
    coutH: number,
    model: string,
    name: string,
    device: string
  ): Promise<any[]> {
    let url = environment.EnginGpsapi + "/createEngin";
    const body = {
      chauffeurId: chauffeurId,
      coutH: coutH,
      model: model, 
      name: name,
      device: device,
    };

    return new Promise((resolve, reject) => {
      this.srManagerService
        .postRessource(url, body)
        .subscribe((response: any[]) => {
          this.onEnginListChanged.next(response);
          resolve(response);
        }, reject);
    });
  }

  updateEnginGpsLocation(
    id: number,
    chauffeurId: number,
    coutH: number,
    model: string,
    name: string,
    device: string
  ): Promise<any[]> {
    let url = environment.EnginGpsapi + "/updateEnginGps";
    const body = {
      enginId: id,
      chauffeurId: chauffeurId,
      coutH: coutH,
      model: model, 
      name: name,
      device: device,
    };

    return new Promise((resolve, reject) => {
      this.srManagerService
        .postRessource(url, body)
        .subscribe((response: any[]) => {
          this.onEnginListChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
}
