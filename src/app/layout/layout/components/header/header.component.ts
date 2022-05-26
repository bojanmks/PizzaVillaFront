import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentWithServiceDataComponent } from 'src/app/shared/components/component-with-service-data/component-with-service-data.component';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { NavLinksService } from './services/nav-links.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ComponentWithServiceDataComponent<IRoute> implements OnInit, AfterViewChecked {

  canBeTransparent: boolean = true;
  isTransparent: boolean = false;
  routesWithTransparency: string[] = ['/home'];

  @ViewChild('navbar') navbar: ElementRef
  @ViewChild('navbarNav') navbarNav: ElementRef
  @ViewChild('navbarToggler') navbarToggler: ElementRef

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.updateTransparency();
  }

  constructor(
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private navLinksService: NavLinksService
    ) {
      super(navLinksService);
    }

  override ngOnInit(): void {
    super.ngOnInit();
    this.router.events.subscribe(() => {
      this.updateCanBeTransparent();
      this.updateTransparency();

      if(this.navbarNav.nativeElement.classList.contains('show')) // closing the expanded navbar on route change
        this.navbarToggler.nativeElement.click();
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
