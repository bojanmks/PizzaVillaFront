import { TestBed } from '@angular/core/testing';

import { ProductCategoriesFormService } from './product-categories-form.service';

describe('ProductCategoriesFormService', () => {
  let service: ProductCategoriesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoriesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
