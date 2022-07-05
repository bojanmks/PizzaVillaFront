import { TestBed } from '@angular/core/testing';

import { ProductCategoriesTableService } from './product-categories-table.service';

describe('ProductCategoriesTableService', () => {
  let service: ProductCategoriesTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoriesTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
