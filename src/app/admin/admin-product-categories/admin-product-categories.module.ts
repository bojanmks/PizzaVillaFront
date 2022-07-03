import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductCategoriesRoutingModule } from './admin-product-categories-routing.module';
import { AdminProductCategoriesComponent } from './admin-product-categories/admin-product-categories.component';


@NgModule({
  declarations: [
    AdminProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminProductCategoriesRoutingModule
  ]
})
export class AdminProductCategoriesModule { }
