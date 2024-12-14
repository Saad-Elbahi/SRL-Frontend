import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Affaire } from "../models/affaire.model";
import { environment } from "environments/environment";
import { SrManagerService } from "app/main/projets/sr-manager.service";


@Injectable({
  providedIn: "root",
})
export class AffaireService {
  public onAffairesListChanged: BehaviorSubject<any>;

  private apiURL = environment.affaireapi;

  constructor(private srManagerService: SrManagerService) {
    // @ts-ignore
    this.onAffairesListChanged = new BehaviorSubject<any>();
  }

  /*getAffaires(): Observable<Affaire[]> {
    // @ts-ignore
      return this.srManagerService.getResources(`${this.apiURL}/getAllAffaire`);
  }*/
  getAffaireById(id: number): Observable<Affaire> {
    // @ts-ignore
    return this.srManagerService.getResource(
      `${this.apiURL}/getAffaireById/${id}`
    );
  }

  deleteAffaire(id: number): Observable<void> {
    // @ts-ignore
    return this.srManagerService.deleteRessource(
      `${this.apiURL}/deleteAffaire/${id}`
    );
  }

  /* saveAffaireFromApi(): Observable<Affaire[]> {
     return this.http.get<Affaire[]>(`${this.apiURL}/save-affaire-from-api`).subscribe();
   }*/

  saveAffaireFromApi(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      let url = this.apiURL + "/saveAffaireFromApi";
      this.srManagerService.getResources(url).subscribe((response: any[]) => {
        this.onAffairesListChanged.next(response);
        resolve(response);
      }, reject);
    });
  }
  getAffaires(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      let url = this.apiURL + "/affaires";
      this.srManagerService.getResource(url).subscribe((response: any[]) => {
        this.onAffairesListChanged.next(response);
        resolve(response);
      }, reject);
    });
  }

  getAllAffaire() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      let url = this.apiURL + "/getAllAffaire";
      this.srManagerService.getResources(url).subscribe((response: any[]) => {
        this.onAffairesListChanged.next(response);
        resolve(response);
      }, reject);
    });
  }
}
