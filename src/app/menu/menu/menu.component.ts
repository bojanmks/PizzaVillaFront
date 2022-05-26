import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomTitleComponent } from 'src/app/shared/components/custom-title/custom-title.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends CustomTitleComponent {

  override pageTitle: string = "Menu";

  constructor(
    titleService: Title
  ) {
    super(titleService);
  }

}
