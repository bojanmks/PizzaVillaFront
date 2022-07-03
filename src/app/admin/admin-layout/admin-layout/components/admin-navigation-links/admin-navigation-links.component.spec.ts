import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationLinksComponent } from './admin-navigation-links.component';

describe('AdminNavigationLinksComponent', () => {
  let component: AdminNavigationLinksComponent;
  let fixture: ComponentFixture<AdminNavigationLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavigationLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavigationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
