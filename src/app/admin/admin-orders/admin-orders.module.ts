import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderDetailsDialogComponent } from './admin-orders/components/order-details-dialog/order-details-dialog.component';


@NgModule({
  declarations: [
    AdminOrdersComponent,
    OrderDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    AdminOrdersRoutingModule,
    SharedModule
  ]
})
export class AdminOrdersModule { }
