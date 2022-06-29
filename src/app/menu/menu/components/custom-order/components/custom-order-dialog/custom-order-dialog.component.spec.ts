import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderDialogComponent } from './custom-order-dialog.component';

describe('CustomOrderDialogComponent', () => {
  let component: CustomOrderDialogComponent;
  let fixture: ComponentFixture<CustomOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
