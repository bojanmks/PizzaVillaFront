import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserSectionComponent } from './admin-user-section.component';

describe('AdminUserSectionComponent', () => {
  let component: AdminUserSectionComponent;
  let fixture: ComponentFixture<AdminUserSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
