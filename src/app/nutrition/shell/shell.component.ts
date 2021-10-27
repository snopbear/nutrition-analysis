import { Component, OnInit } from '@angular/core';
import { Helpers } from 'src/app/@core/@utilites/@helpers/helpers';
import { NutritionService } from '../../@core/index';
@Component({
  selector: 'na-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  //#region decleartion
  ingredients: any;
  fullRes: any;
  combined: any[] = [];
  viewDetails: boolean;
  //#endregion

  //#region Actions
  saveNutrition(event: any) {
    this.nutritionService
      .fetch({ ingr: Helpers.stringToArray(event.recipeName) })
      .subscribe((res) => {
        this.combined = [];
        this.viewDetails = true;

        res.ingredients
          .map((arr: any) => arr.parsed)
          .map((item: any) => {
            this.combined.push(...item);
          });

        this.ingredients = this.combined;
        this.fullRes = res;
      });
  }

  clearNutrition(event: any) {
    this.viewDetails = event;
  }
  //#endregion
  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {}
}
