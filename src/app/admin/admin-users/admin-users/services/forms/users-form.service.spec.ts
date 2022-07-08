import { TestBed } from '@angular/core/testing';

import { UsersFormService } from './users-form.service';

describe('UsersFormService', () => {
  let service: UsersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
