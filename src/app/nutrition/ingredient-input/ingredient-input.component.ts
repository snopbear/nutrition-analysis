import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../@core/index';

@Component({
  selector: 'na-ingredient-input',
  templateUrl: './ingredient-input.component.html',
  styleUrls: ['./ingredient-input.component.scss'],
})
export class IngredientInputComponent implements OnInit {
  //#region decleartion
  @Output() create = new EventEmitter<Recipe>();
  @Output() clear = new EventEmitter<boolean>();
  nutritionForm: FormGroup;
  //#endregion

  //#region Actions
  saveNutrition() {
    if (this.nutritionForm.valid) {
      const nutrition = {
        ...this.nutritionForm.value,
      };
      this.create.emit(nutrition);
    }
  }
  clearNutrition() {
    this.clear.emit(false);
  }
  //#endregion

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.nutritionForm = this.fb.group({
      recipeName: ['1 cup rice,\n10 oz chickpeas', Validators.required],
    });
  }
}
