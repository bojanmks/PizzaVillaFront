import { Component } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { ILinkText } from 'src/app/shared/interfaces/i-link';
import { OtherLinksService } from '../../services/other-links.service';

@Component({
  selector: 'app-other-useful-links',
  templateUrl: './other-useful-links.component.html',
  styleUrls: ['./other-useful-links.component.scss', '../../footer.component.scss']
})
export class OtherUsefulLinksComponent extends ComponentWithServiceDataComponent<ILinkText> {

  constructor(
    private otherLinksService: OtherLinksService
  ) {
    super(otherLinksService);
  }

}
