/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredientInputComponent } from './ingredient-input.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('IngredientInputComponent', () => {
  let component: IngredientInputComponent;
  let fixture: ComponentFixture<IngredientInputComponent>;
  let analyze: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [IngredientInputComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInputComponent);
    component = fixture.componentInstance;
    analyze = fixture.debugElement.query(By.css('button'));
  });

  it('setting enabled analyze button to false if it empty', () => {
    component.clearNutrition();
    fixture.detectChanges();
    expect(analyze.nativeElement.disabled).toBeTruthy();
  });
});
