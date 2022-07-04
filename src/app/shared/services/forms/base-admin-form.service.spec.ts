import { TestBed } from '@angular/core/testing';

import { BaseAdminFormService } from './base-admin-form.service';

describe('BaseAdminFormService', () => {
  let service: BaseAdminFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseAdminFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
