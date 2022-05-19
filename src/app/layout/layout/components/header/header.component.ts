import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRoute } from 'src/app/shared/interfaces/i-route';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  canBeTransparent: boolean = true;
  isTransparent: boolean = false;
  routesWithTransparency: string[] = ['/home'];

  navLinks: IRoute[] = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ];

  @ViewChild('navbar') navbar: ElementRef

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.updateTransparency();
  }

  constructor(
    private changeDetector : ChangeDetectorRef,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.updateCanBeTransparent();
      this.updateTransparency();
    });
  }

  ngAfterViewInit(): void {
    this.updateCanBeTransparent();
    this.updateTransparency();
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges(); // prevents ExpressionChangedAfterItHasBeenCheckedError
  }

  // transparency
  private updateCanBeTransparent(): void {
    this.canBeTransparent = this.routesWithTransparency.includes(this.router.url);

    if(!this.canBeTransparent)
      this.isTransparent = false;
  }

  updateTransparency(): void {
    if(!this.canBeTransparent)
      return;

    this.isTransparent = window.scrollY <= this.navbar.nativeElement.clientHeight;
  }

}
