import { TestBed } from '@angular/core/testing';

import { AuditLogTableService } from './audit-log-table.service';

describe('AuditLogTableService', () => {
  let service: AuditLogTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditLogTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
