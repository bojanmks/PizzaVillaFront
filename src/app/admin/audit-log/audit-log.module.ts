import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogRoutingModule } from './audit-log-routing.module';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuditLogComponent
  ],
  imports: [
    CommonModule,
    AuditLogRoutingModule,
    SharedModule
  ]
})
export class AuditLogModule { }
