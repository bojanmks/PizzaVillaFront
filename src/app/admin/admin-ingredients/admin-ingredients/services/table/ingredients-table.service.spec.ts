import { TestBed } from '@angular/core/testing';

import { IngredientsTableService } from './ingredients-table.service';

describe('IngredientsTableService', () => {
  let service: IngredientsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
