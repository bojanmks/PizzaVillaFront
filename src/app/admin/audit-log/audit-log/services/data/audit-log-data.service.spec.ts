import { TestBed } from '@angular/core/testing';

import { AuditLogDataService } from './audit-log-data.service';

describe('AuditLogDataService', () => {
  let service: AuditLogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditLogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
