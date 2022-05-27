import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurKeyFeaturesComponent } from './our-key-features.component';

describe('OurKeyFeaturesComponent', () => {
  let component: OurKeyFeaturesComponent;
  let fixture: ComponentFixture<OurKeyFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurKeyFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurKeyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
