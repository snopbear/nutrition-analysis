import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootService } from '../../@root/root.service';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  endPoints = {
    postNutritionDetails: 'nutrition-details',
  };
  constructor(private rootService: RootService) {}

  add(model: any): Observable<any> {
    return this.rootService.postRoot(
      this.endPoints.postNutritionDetails,
      model
    );
  }
}
