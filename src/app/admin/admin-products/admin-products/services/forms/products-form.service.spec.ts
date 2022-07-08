import { TestBed } from '@angular/core/testing';

import { ProductsFormService } from './products-form.service';

describe('ProductsFormService', () => {
  let service: ProductsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
