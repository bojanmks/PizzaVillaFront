import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSlide]'
})
export class SlideDirective implements OnInit {

  @Input() image: string;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundImage = `url(${this.image})`;
  }

}
