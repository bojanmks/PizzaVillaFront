import { TestBed } from '@angular/core/testing';

import { FooterInfoService } from './footer-info.service';

describe('FooterInfoService', () => {
  let service: FooterInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
