import { TestBed } from '@angular/core/testing';

import { MultipleSelectFormService } from './multiple-select-form.service';

describe('MultipleSelectFormService', () => {
  let service: MultipleSelectFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleSelectFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
