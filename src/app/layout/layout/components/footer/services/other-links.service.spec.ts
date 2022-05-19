import { TestBed } from '@angular/core/testing';

import { OtherLinksService } from './other-links.service';

describe('OtherLinksService', () => {
  let service: OtherLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
