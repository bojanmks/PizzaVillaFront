import { TestBed } from '@angular/core/testing';

import { AddonsFormService } from './addons-form.service';

describe('AddonsFormService', () => {
  let service: AddonsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
