import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminOrdersRoutingModule,
    SharedModule
  ]
})
export class AdminOrdersModule { }
