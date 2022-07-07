import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIngredientsComponent } from './form-ingredients.component';

describe('FormIngredientsComponent', () => {
  let component: FormIngredientsComponent;
  let fixture: ComponentFixture<FormIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
