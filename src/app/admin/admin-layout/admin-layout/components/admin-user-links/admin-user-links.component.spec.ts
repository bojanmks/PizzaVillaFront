import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserLinksComponent } from './admin-user-links.component';

describe('AdminUserLinksComponent', () => {
  let component: AdminUserLinksComponent;
  let fixture: ComponentFixture<AdminUserLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
