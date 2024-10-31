import { SrManagerService } from "./../../sr-manager.service";
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { VehiculeRoute } from "../models/vehicule-route";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AssociateFromToRequestDTO } from "../models/DTO/AssociateFromToRequestDTO";
import { ImputationRequestDTO } from "../models/DTO/ImputationRequestDTO";
import { UpdateFillingPercentageDTO } from "../models/DTO/UpdateFillingPercentageDTO";
import { PerformanceOverTimeRequestDTO } from "../models/DTO/PerformanceOverTimeRequestDTO";
import { UpdateMouvementDTO } from "../models/DTO/UpdateMouvementDTO";
import { FromMouvementDTO } from "../models/DTO/FromMouvementDTO";
import { TripImputationDTO } from "../models/DTO/TripImputationDTO";

@Injectable({
  providedIn: "root",
})
export class VehiculeRouteService {
  onMouvementsListChanged: BehaviorSubject<any[]>;

  constructor(private srManagerService: SrManagerService) {
    // @ts-ignore
    this.onMouvementsListChanged = new BehaviorSubject<any[]>();
  }

  getAllVehiculeRoutes(): Promise<any[]> {
    let url = environment.vhrouteapi + "/getAllVehiculeRoutes";

    return new Promise((resolve, reject) => {
      this.srManagerService
        .getResource(url)
        .pipe(
          map((routes: VehiculeRoute[]) =>
            routes.sort(
              (a, b) =>
                new Date(b.date!).getTime() - new Date(a.date!).getTime()
            )
          )
        )
        .subscribe((response: any[]) => {
          this.onMouvementsListChanged.next(response);
          resolve(response);
        }, reject);
    });
  }

  /*getAllVehiculeRoute(): Observable<VehiculeRoute[]> {
        let url = environment.vhrouteapi + '/getAllVehiculeRoutes';

        return this.srManagerService.getResource(url)
            .pipe(map((routes: VehiculeRoute[]) =>
                routes.sort((a, b) =>
                    new Date(b.date!).getTime() - new Date(a.date!).getTime()))
            );
    }*/

  deleteVehiculeRoute(id: number): Observable<any> {
    return this.srManagerService
      .deleteRessource(`${environment.vhrouteapi}/deleteVehiculeroute/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error (e.g., network issue)
      console.error("An error occurred:", error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(
        `Backend returned status ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  totalRouteLength(): Observable<any> {
    return this.srManagerService.getResource(
      `${environment.vhrouteapi}/totalRouteLength`
    );
  }

  //A refaire
  /* performanceOverTime(startDate: string, endDate: string): Observable<any> {
       return this.srManagerService.getResourceWithParams(`${environment.vhrouteapi}/performanceOverTime`, {
             params: {startDate: startDate, endDate: endDate,},
           })
           .pipe(catchError(this.handleError));
     }*/

  performanceOverTime(startDate: string, endDate: string): Observable<any> {
    let dto: PerformanceOverTimeRequestDTO = new PerformanceOverTimeRequestDTO(
      startDate,
      endDate
    );
    return this.srManagerService
      .postRessource(`${environment.vhrouteapi}/performanceOverTime`, dto)
      .pipe(catchError(this.handleError));
  }

  totalCostPerTripByMonth(year: string, month: string) {
    return this.srManagerService.getResource(
      `${environment.vhrouteapi}/totalCostPerTripByMonth/` + year + "/" + month
    );
  }

  //A Refaire
  /*  associateFromTo(
    request: AssociateFromToRequestDTO
  ): Observable<VehiculeRoute> {
    const url = `${environment.vhrouteapi}/associateFromTo`;
    const params = new HttpParams().set(
            "vehiculeRouteId",
            vehiculeRouteId.toString()
        );
    return this.srManagerService.postRessource(url, request);
  } */
  /*  associateFromTo(request: AssociateFromToRequestDTO): Observable<VehiculeRoute> {
    const url = `${environment.vhrouteapi}/associateFromTo`;

    return this.srManagerService.postRessource(url, request);
  } */

  associateFromTo(
    request: AssociateFromToRequestDTO
  ): Observable<VehiculeRoute> {
    const url = `${environment.vhrouteapi}/associateFromTo`;
    /*const params = new HttpParams().set(
          "vehiculeRouteId",
          vehiculeRouteId.toString()
      );*/
    return this.srManagerService.postRessource(url, request);
  }

  getVehiculeRouteById(vehiculeRouteId: number): Observable<any[]> {
    // @ts-ignore
    return this.srManagerService.getResources(
      `${environment.vhrouteapi}/getVehiculeRouteById/${vehiculeRouteId}`
    );
  }

  //A Refaire
  associateImputation(imputationRequest: ImputationRequestDTO): Observable<VehiculeRoute> {
    const url = `${environment.vhrouteapi}/associateImputation`;
    //const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.srManagerService.postRessource(url, imputationRequest);
  }

  imputationByVehiculeRoute(vehiculeRouteId: number): Observable<any[]> {
    // @ts-ignore
    return this.srManagerService.getResources(
      `${environment.tripimpapi}/imputationByVehiculeRoute/${vehiculeRouteId}`
    );
  }

  /*updateFillingPercentage(dto: UpdateFillingPercentageDTO): Promise<any> {

        console.log(dto.vehiculeRouteId)
        console.log(dto.fillingPercentage)
        let url = environment.vhrouteapi + '/updateFillingPercentage';

        return new Promise((resolve, reject) => {
            // @ts-ignore
            this.srManagerService.putRessource(url, dto).subscribe(
                (response: any) => {
                    this.onMouvementsListChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }*/

  updateFillingPercentage(dto: UpdateFillingPercentageDTO): Promise<any> {
    let url = environment.vhrouteapi + "/updateFillingPercentage";

    return new Promise((resolve, reject) => {
      this.srManagerService
        .putRessource(url, dto)
        .pipe(
          map((routes: VehiculeRoute[]) =>
            routes.sort(
              (a, b) =>
                new Date(b.date!).getTime() - new Date(a.date!).getTime()
            )
          )
        )
        .subscribe((response: any[]) => {
          this.onMouvementsListChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
  updateMouvement(dto: UpdateMouvementDTO): Promise<any> {
    const url = environment.vhrouteapi + "/updateMouvement";

    return new Promise((resolve, reject) => {
      this.srManagerService.putRessource(url, dto).subscribe(
        (response: any) => {
          this.onMouvementsListChanged.next(response);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  //-----------------------------------------------------------------------

  getAllClients() {
    return new Promise((resolve, reject) => {
      const url = `${environment.clientApi}/allClient`;
      this.srManagerService.getResource(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getAllLots() {
    return new Promise((resolve, reject) => {
      const url = `${environment.lotApi}/allLots`;
      this.srManagerService.getResource(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getSoustraitants(projectId: number) {
    console.log('Subcontractors byProject==>' + projectId);
    return new Promise((resolve, reject) => {
        const url = `${environment.soustraitantapi}/soustraitants/` + projectId;
        this.srManagerService.getResource(url).subscribe(
            (response) => {
                resolve(response);
            },
            (error) => {
                reject(error);
            }
        );
    });
}

   


  getImputationByVehiculeRouteId(vehiculeRouteId: number) {
    return new Promise((resolve, reject) => {
      const url = `${environment.tripimpapi}/imputationByVehiculeRoute/${vehiculeRouteId}`;
      this.srManagerService.getResource(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  getFromMouvementByVehiculeRouteId(vehiculeRouteId: number) {
    return new Promise((resolve, reject) => {
      const url = `${environment.frommvtapi}/byVehiculeRoute/${vehiculeRouteId}`;
      this.srManagerService.getResource(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteFromMouvement(id: number): Observable<void> {
    // @ts-ignore
    return this.srManagerService
      .deleteRessource(
        `${environment.frommvtapi}/${id}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("Error occurred:", error);
          return throwError(error);
        })
      );
  }
  deleteImputation(id: number): Observable<void> {
    // @ts-ignore
    return this.srManagerService
      .deleteRessource(
        `${environment.tripimpapi}/deleteImputation/${id}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("Error occurred:", error);
          return throwError(error);
        })
      );
  }
  updateImputation(dto: TripImputationDTO): Promise<any> {
    const url = `${environment.tripimpapi}/updateImputation/${dto.id}`; 

    return new Promise((resolve, reject) => {
        this.srManagerService.putRessource(url, dto).subscribe(
            (response: any) => {
                this.onMouvementsListChanged.next(response);
                resolve(response);
            },
            (error) => {
                reject(error);
            }
        );
    });
}

}
