import { TestBed } from '@angular/core/testing';

import { NavLinksService } from './nav-links.service';

describe('NavLinksService', () => {
  let service: NavLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
