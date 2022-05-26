import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTitleComponent } from './custom-title.component';

describe('CustomTitleComponent', () => {
  let component: CustomTitleComponent;
  let fixture: ComponentFixture<CustomTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
