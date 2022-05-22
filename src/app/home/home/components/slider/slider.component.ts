import { Component, OnInit } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { ISliderImage } from './interfaces/i-slider-image';
import { SliderImagesService } from './services/slider-images.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent extends ComponentWithServiceDataComponent<ISliderImage> {

  constructor(
    private sliderImagesService: SliderImagesService
  ) {
    super(sliderImagesService);
  }

}
