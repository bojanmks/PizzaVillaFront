import { TestBed } from '@angular/core/testing';

import { SocialLinksService } from './social-links.service';

describe('SocialLinksService', () => {
  let service: SocialLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
