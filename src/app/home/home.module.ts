import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/components/slider/slider.component';
import { SharedModule } from '../shared/shared.module';
import { SlideDirective } from './home/components/slider/directives/slide.directive';
import { AboutUsComponent } from './home/components/about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    SlideDirective,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
