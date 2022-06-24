import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedToBeLoggedInDialogComponent } from './need-to-be-logged-in-dialog.component';

describe('NeedToBeLoggedInDialogComponent', () => {
  let component: NeedToBeLoggedInDialogComponent;
  let fixture: ComponentFixture<NeedToBeLoggedInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedToBeLoggedInDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedToBeLoggedInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
