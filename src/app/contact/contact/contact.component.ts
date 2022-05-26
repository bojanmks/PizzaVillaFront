import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomTitleComponent } from 'src/app/shared/components/custom-title/custom-title.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends CustomTitleComponent {

  override pageTitle: string = "Contact";

  constructor(
    titleService: Title
  ) {
    super(titleService);
  }

}
