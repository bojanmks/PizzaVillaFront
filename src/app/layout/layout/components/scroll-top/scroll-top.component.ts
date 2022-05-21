import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  isVisible: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.updateVisibility();
  }

  constructor() { }

  ngOnInit(): void {
    this.updateVisibility();
  }

  private updateVisibility(): void {
    this.isVisible = window.scrollY > 200;
  }
  
  scrollToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
