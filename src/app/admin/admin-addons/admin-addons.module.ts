import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAddonsRoutingModule } from './admin-addons-routing.module';
import { AdminAddonsComponent } from './admin-addons/admin-addons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormAddonsComponent } from './admin-addons/components/form-addons/form-addons.component';


@NgModule({
  declarations: [
    AdminAddonsComponent,
    FormAddonsComponent
  ],
  imports: [
    CommonModule,
    AdminAddonsRoutingModule,
    SharedModule
  ]
})
export class AdminAddonsModule { }
