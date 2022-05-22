import { Component } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { IFooterOtherLink } from '../../interfaces/i-footer-other-link';
import { OtherLinksService } from '../../services/other-links.service';

@Component({
  selector: 'app-other-useful-links',
  templateUrl: './other-useful-links.component.html',
  styleUrls: ['./other-useful-links.component.scss']
})
export class OtherUsefulLinksComponent extends ComponentWithServiceDataComponent<IFooterOtherLink> {

  constructor(
    private otherLinksService: OtherLinksService
  ) {
    super(otherLinksService);
  }

}
