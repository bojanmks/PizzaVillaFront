import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(
    private observer: BreakpointObserver,
    private cdref: ChangeDetectorRef,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 991px)']).subscribe((data) => {
      if(data.matches) {
        this.drawer.mode = 'over';
        this.drawer.opened = false;
      }
      else {
        this.drawer.mode = 'side';
        this.drawer.opened = true;
      }
    });
    this.cdref.detectChanges();
  }

}
