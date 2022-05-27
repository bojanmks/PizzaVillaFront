import { Component, OnInit } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { IKeyFeature } from './interfaces/i-key-feature';
import { KeyFeaturesService } from './services/key-features.service';

@Component({
  selector: 'app-our-key-features',
  templateUrl: './our-key-features.component.html',
  styleUrls: ['./our-key-features.component.scss', './css/flaticon/flaticon.css']
})
export class OurKeyFeaturesComponent extends ComponentWithServiceDataComponent<IKeyFeature> {

  constructor(
    private keyFeaturesService: KeyFeaturesService
  ) {
    super(keyFeaturesService, true);
  }

}
