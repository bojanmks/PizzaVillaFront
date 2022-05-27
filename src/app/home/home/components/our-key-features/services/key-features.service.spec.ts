import { TestBed } from '@angular/core/testing';

import { KeyFeaturesService } from './key-features.service';

describe('KeyFeaturesService', () => {
  let service: KeyFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
