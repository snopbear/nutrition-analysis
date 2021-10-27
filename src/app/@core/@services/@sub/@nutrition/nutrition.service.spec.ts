/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { NutritionService } from './nutrition.service';

describe('Service: Nutrition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NutritionService],
    });
  });

  it('should ...', inject([NutritionService], (service: NutritionService) => {
    expect(service).toBeTruthy();
  }));
});
