import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss']
})
export class CustomTitleComponent implements OnInit {

  pageTitle: string;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.updateTitle();
  }

  private updateTitle(): void {
    this.titleService.setTitle("PizzaVilla | " + this.pageTitle);
  }

}
