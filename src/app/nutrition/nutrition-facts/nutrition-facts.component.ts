import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'na-nutrition-facts',
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.scss'],
})
export class NutritionFactsComponent implements OnInit {
  @Input() fullRes: any;
  constructor() {}
  ngOnInit() {}
}
