import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminIngredientsRoutingModule } from './admin-ingredients-routing.module';
import { AdminIngredientsComponent } from './admin-ingredients/admin-ingredients.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminIngredientsComponent
  ],
  imports: [
    CommonModule,
    AdminIngredientsRoutingModule,
    SharedModule
  ]
})
export class AdminIngredientsModule { }
