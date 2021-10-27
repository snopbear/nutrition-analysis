import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'na-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: any;
  constructor() {}
  ngOnInit() {}
}
