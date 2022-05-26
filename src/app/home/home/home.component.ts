import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomTitleComponent } from 'src/app/shared/components/custom-title/custom-title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CustomTitleComponent {

  override pageTitle: string = "Home";

  constructor(
    titleService: Title
  ) {
    super(titleService);
  }

}
