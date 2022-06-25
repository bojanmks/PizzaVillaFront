import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessfullyCreatedDialogComponent } from './order-successfully-created-dialog.component';

describe('OrderSuccessfullyCreatedDialogComponent', () => {
  let component: OrderSuccessfullyCreatedDialogComponent;
  let fixture: ComponentFixture<OrderSuccessfullyCreatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccessfullyCreatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessfullyCreatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
