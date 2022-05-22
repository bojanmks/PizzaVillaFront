import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithServiceDataComponent } from './component-with-service-data.component';

describe('ComponentWithServiceDataComponent', () => {
  let component: ComponentWithServiceDataComponent;
  let fixture: ComponentFixture<ComponentWithServiceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWithServiceDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
