import { TestBed } from '@angular/core/testing';

import { IngredientsFormService } from './ingredients-form.service';

describe('IngredientsFormService', () => {
  let service: IngredientsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
