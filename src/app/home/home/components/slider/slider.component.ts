import { Component, OnInit } from '@angular/core';
import { ISliderImage } from './interfaces/i-slider-image';
import { SliderImagesService } from './services/slider-images.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images: ISliderImage[] = [];

  constructor(
    private sliderImagesService: SliderImagesService
  ) { }

  ngOnInit(): void {
    this.loadSliderImages();
  }

  loadSliderImages(): void {
    this.sliderImagesService.getAll().subscribe({
      next: (data) => {
        this.images = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
