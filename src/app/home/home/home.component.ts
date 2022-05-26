import { Component } from '@angular/core';
import { CustomTitleComponent } from 'src/app/shared/components/custom-title/custom-title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CustomTitleComponent {

  override pageTitle: string = "Home";

  constructor() {
    super();
  }

}
