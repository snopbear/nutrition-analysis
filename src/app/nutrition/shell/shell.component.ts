import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../../@core/index';
@Component({
  selector: 'na-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  ingredients: any;
  fullRes: any;
  combined: any[] = [];
  viewDetails: boolean;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {}

  saveNutrition(event: any) {
    let recipeName = event.recipeName.replace(/(\r\n|\n|\r)/gm, '').split(',');
    this.nutritionService.add({ ingr: recipeName }).subscribe((res) => {
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
}
