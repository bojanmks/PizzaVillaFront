import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductCategoriesComponent } from './form-product-categories.component';

describe('FormProductCategoriesComponent', () => {
  let component: FormProductCategoriesComponent;
  let fixture: ComponentFixture<FormProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
