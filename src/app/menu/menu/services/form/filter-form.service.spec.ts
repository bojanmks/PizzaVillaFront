import { TestBed } from '@angular/core/testing';

import { FilterFormService } from './filter-form.service';

describe('FilterFormService', () => {
  let service: FilterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
