import { SrManagerService } from 'app/main/projets/sr-manager.service';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, map } from 'rxjs/operators';
import { EnginRoute } from '../models/EnginRoute';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { EnginRouteDTO } from '../dto/EnginRouteDTO';
import { EnginImputationRequestDTO } from '../dto/EnginImputationRequestDTO';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MouvementEnginService {
  onEnginListChanged:BehaviorSubject<any[]>;
  onImputationsChanged: BehaviorSubject<any[]>;
  constructor(private srManagerService:SrManagerService) {
      // @ts-ignore
    this.onEnginListChanged= new BehaviorSubject<any[]>();
     // @ts-ignore
    this.onImputationsChanged = new BehaviorSubject<any[]>();

   }

  getAllEnginRoutes(): Promise<any[]> {
    let url = environment.EnginRteapi + "/getAllEnginRoutes";

    return new Promise((resolve, reject) => {
      this.srManagerService
        .getResource(url)
        .pipe(
          map((routes: EnginRoute[]) =>
            routes.sort(
              (a, b) =>
                new Date(b.date!).getTime() - new Date(a.date!).getTime()
            )
          )
        )
        .subscribe((response: any[]) => {
          this.onEnginListChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
  updateRendement(dto: EnginRouteDTO): Promise<any> {
    const url = environment.EnginRteapi + "/updateRendement";

    return new Promise((resolve, reject) => {
      this.srManagerService.putRessource(url, dto).subscribe(
        (response: any) => {
          this.onEnginListChanged.next(response);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  imputationByEnginRoute(enginRouteId: number): Promise<any[]> {
    const url = `${environment.Enginimpapi}/imputationByEnginRoute/${enginRouteId}`;
    return new Promise((resolve, reject) => {
      this.srManagerService.getResources(url).subscribe(
        (response: any) => resolve(response), // Resolve with the response
        (error) => reject(error) // Reject on error
      );
    });
  }
  
  getImputationByEnginRouteId(enginRouteId: number) {
    return new Promise((resolve, reject) => {
      const url = `${environment.Enginimpapi}/imputationByEnginRoute/${enginRouteId}`;
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
  saveImputation(imputationRequest: EnginImputationRequestDTO): Promise<any[]> {
    const url = `${environment.Enginimpapi}/saveImputationEngin`;
    console.log("Sending request to:", url);
    console.log("Request payload:", imputationRequest);

    return new Promise((resolve, reject) => {
      this.srManagerService
        .postRessource(url, imputationRequest)
        .subscribe((response: any) => {
          this.onImputationsChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
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
  updateImputation(dto: EnginImputationRequestDTO): Promise<any[]> {
    console.log(dto);
    const url = `${environment.Enginimpapi}/updateImputation/${dto.id}`;

    return new Promise((resolve, reject) => {
      this.srManagerService
        .putRessource(url, dto)
        .subscribe((response: any) => {
          this.onImputationsChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
  getSoustraitants(projectId: number) {
    console.log("Subcontractors byProject==>" + projectId);
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
  deleteImputation(id: number): Observable<void> {
    // @ts-ignore
    return this.srManagerService
      .deleteRessource(`${environment.Enginimpapi}/deleteImputation/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("Error occurred:", error);
          return throwError(error);
        })
      );
  }

}

