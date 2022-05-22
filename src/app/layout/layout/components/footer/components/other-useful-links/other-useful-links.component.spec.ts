import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsefulLinksComponent } from './other-useful-links.component';

describe('OtherUsefulLinksComponent', () => {
  let component: OtherUsefulLinksComponent;
  let fixture: ComponentFixture<OtherUsefulLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherUsefulLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsefulLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
