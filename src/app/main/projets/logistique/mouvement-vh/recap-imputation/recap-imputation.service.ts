import { SrManagerService } from './../../../sr-manager.service';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecapImputationService {
  onMouvementsListChanged: BehaviorSubject<any[]> = new BehaviorSubject([]);

constructor(private srManagerService:SrManagerService ) { }

getAllImputation(): Promise<any> {
  const url = environment.tripimpapi + "/allImputation";

  return new Promise((resolve, reject) => {
    this.srManagerService.getResource(url).subscribe(
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