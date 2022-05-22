import { Component, OnInit } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { ILinkIcon } from 'src/app/shared/interfaces/i-link';
import { SocialLinksService } from '../../services/social-links.service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent extends ComponentWithServiceDataComponent<ILinkIcon> {

  constructor(
    private socialLinksService: SocialLinksService
  ) {
    super(socialLinksService);
  }

}
