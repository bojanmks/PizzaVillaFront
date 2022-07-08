import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormUsersComponent } from './admin-users/components/form-users/form-users.component';


@NgModule({
  declarations: [
    AdminUsersComponent,
    FormUsersComponent
  ],
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    SharedModule
  ]
})
export class AdminUsersModule { }
