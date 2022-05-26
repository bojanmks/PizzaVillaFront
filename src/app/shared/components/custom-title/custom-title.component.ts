import { Component, Injectable, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss']
})
export abstract class CustomTitleComponent implements OnInit {

  abstract pageTitle: string;
  private titleService: Title = new Title(document);

  // constructor(
  //   private titleService: Title
  // ) { }

  ngOnInit(): void {
    this.updateTitle();
  }

  private updateTitle(): void {
    this.titleService.setTitle("PizzaVilla | " + this.pageTitle);
  }

}
