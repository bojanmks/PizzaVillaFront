import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.enableTitleReset();
  }

  enableTitleReset(): void {
    this.router.events.subscribe({
      next: () => {
        this.titleService.setTitle("PizzaVilla");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
