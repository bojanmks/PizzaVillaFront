import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAddonsRoutingModule } from './admin-addons-routing.module';
import { AdminAddonsComponent } from './admin-addons/admin-addons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminAddonsComponent
  ],
  imports: [
    CommonModule,
    AdminAddonsRoutingModule,
    SharedModule
  ]
})
export class AdminAddonsModule { }
