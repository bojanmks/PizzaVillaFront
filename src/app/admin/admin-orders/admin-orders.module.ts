import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';


@NgModule({
  declarations: [
    AdminOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminOrdersRoutingModule
  ]
})
export class AdminOrdersModule { }
