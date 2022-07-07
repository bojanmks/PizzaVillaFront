import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminIngredientsRoutingModule } from './admin-ingredients-routing.module';
import { AdminIngredientsComponent } from './admin-ingredients/admin-ingredients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormIngredientsComponent } from './admin-ingredients/components/form-ingredients/form-ingredients.component';


@NgModule({
  declarations: [
    AdminIngredientsComponent,
    FormIngredientsComponent
  ],
  imports: [
    CommonModule,
    AdminIngredientsRoutingModule,
    SharedModule
  ]
})
export class AdminIngredientsModule { }
