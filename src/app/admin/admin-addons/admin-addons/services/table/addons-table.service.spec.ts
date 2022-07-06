import { TestBed } from '@angular/core/testing';

import { AddonsTableService } from './addons-table.service';

describe('AddonsTableService', () => {
  let service: AddonsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
