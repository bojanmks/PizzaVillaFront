import { Component } from '@angular/core';
import { CustomTitleComponent } from 'src/app/shared/components/custom-title/custom-title.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends CustomTitleComponent {

  override pageTitle: string = "Menu";

  constructor() {
    super();
  }

}
