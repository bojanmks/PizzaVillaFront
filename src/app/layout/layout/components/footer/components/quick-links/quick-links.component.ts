import { Component } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { NavLinksService } from '../../../header/services/nav-links.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent extends ComponentWithServiceDataComponent<IRoute> {

  constructor(
    private navLinksService: NavLinksService
  ) {
    super(navLinksService);
  }

}
