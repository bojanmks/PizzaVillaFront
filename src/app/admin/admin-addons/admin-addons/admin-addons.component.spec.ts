import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddonsComponent } from './admin-addons.component';

describe('AdminAddonsComponent', () => {
  let component: AdminAddonsComponent;
  let fixture: ComponentFixture<AdminAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
