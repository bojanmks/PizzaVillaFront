import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderComponent } from './custom-order.component';

describe('CustomOrderComponent', () => {
  let component: CustomOrderComponent;
  let fixture: ComponentFixture<CustomOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
