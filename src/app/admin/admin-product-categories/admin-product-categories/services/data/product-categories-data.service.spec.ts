import { TestBed } from '@angular/core/testing';

import { ProductCategoriesDataService } from './product-categories-data.service';

describe('ProductCategoriesDataService', () => {
  let service: ProductCategoriesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoriesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
