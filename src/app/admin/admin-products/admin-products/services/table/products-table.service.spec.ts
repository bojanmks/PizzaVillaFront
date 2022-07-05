import { TestBed } from '@angular/core/testing';

import { ProductsTableService } from './products-table.service';

describe('ProductsTableService', () => {
  let service: ProductsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
