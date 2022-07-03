import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogRoutingModule } from './audit-log-routing.module';
import { AuditLogComponent } from './audit-log/audit-log.component';


@NgModule({
  declarations: [
    AuditLogComponent
  ],
  imports: [
    CommonModule,
    AuditLogRoutingModule
  ]
})
export class AuditLogModule { }
