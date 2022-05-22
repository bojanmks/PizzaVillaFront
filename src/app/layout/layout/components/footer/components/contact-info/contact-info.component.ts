import { Component } from '@angular/core';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { IFooterInfo } from '../../interfaces/i-footer-info';
import { FooterInfoService } from '../../services/footer-info.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss', '../../footer.component.scss']
})
export class ContactInfoComponent extends ComponentWithServiceDataComponent<IFooterInfo> {

  constructor(
    private footerInfoService: FooterInfoService
  ) {
    super(footerInfoService);
  }

}
