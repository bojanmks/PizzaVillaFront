import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddonsComponent } from './form-addons.component';

describe('FormAddonsComponent', () => {
  let component: FormAddonsComponent;
  let fixture: ComponentFixture<FormAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
