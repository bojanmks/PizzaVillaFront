import { TestBed } from '@angular/core/testing';

import { AddonsDataService } from './addons-data.service';

describe('AddonsDataService', () => {
  let service: AddonsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
