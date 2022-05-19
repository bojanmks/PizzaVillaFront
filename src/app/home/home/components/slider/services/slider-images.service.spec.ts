import { TestBed } from '@angular/core/testing';

import { SliderImagesService } from './slider-images.service';

describe('SliderImagesService', () => {
  let service: SliderImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
