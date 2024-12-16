import { Injectable } from '@angular/core';
import { SrManagerService } from 'app/main/projets/sr-manager.service';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecapEnginImputationService {
  onMouvementsListChanged: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private srManagerService:SrManagerService) { }
  getAllImputation(): Promise<any> {
    const url = environment.Enginimpapi + "/allImputation";
  
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
