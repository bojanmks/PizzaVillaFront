import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductsRoutingModule } from './admin-products-routing.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormProductsComponent } from './admin-products/components/form-products/form-products.component';


@NgModule({
  declarations: [
    AdminProductsComponent,
    FormProductsComponent
  ],
  imports: [
    CommonModule,
    AdminProductsRoutingModule,
    SharedModule
  ]
})
export class AdminProductsModule { }
