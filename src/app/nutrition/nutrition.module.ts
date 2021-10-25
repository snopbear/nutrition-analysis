import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../@shared/shared.module';
import { NutritionRoutingModule } from './nutrition-routing.module';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { NutritionFactsComponent } from './nutrition-facts/nutrition-facts.component';
import { IngredientInputComponent } from './ingredient-input/ingredient-input.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    ShellComponent,
    IngredientInputComponent,
    IngredientListComponent,
    NutritionFactsComponent,
  ],
  imports: [CommonModule, NutritionRoutingModule, SharedModule],
  providers: [SharedModule],
})
export class NutritionModule {}
