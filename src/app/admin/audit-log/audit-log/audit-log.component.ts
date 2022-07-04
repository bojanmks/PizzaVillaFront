import { Component, OnInit } from '@angular/core';
import { AuditLogService } from './services/api/audit-log.service';
import { AuditLogDataService } from './services/data/audit-log-data.service';
import { AuditLogTableService } from './services/table/audit-log-table.service';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {

  constructor(
    public apiService: AuditLogService,
    public dataService: AuditLogDataService,
    public tableService: AuditLogTableService
  ) { }

  ngOnInit(): void {
  }

}
