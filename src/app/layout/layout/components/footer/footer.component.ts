import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { NavLinksService } from '../header/services/nav-links.service';
import { IFooterInfo } from './interfaces/i-footer-info';
import { IFooterOtherLink } from './interfaces/i-footer-other-link';
import { FooterInfoService } from './services/footer-info.service';
import { OtherLinksService } from './services/other-links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerInfo: IFooterInfo[] = [];
  quickLinks: IRoute[] = [];
  otherLinks: IFooterOtherLink[] = [];

  constructor(
    private navLinksService: NavLinksService,
    private otherLinksService: OtherLinksService,
    private footerInfoService: FooterInfoService
  ) { }

  ngOnInit(): void {
    this.loadFooterInfo();
    this.loadQuickLinks();
    this.loadOtherLInks();
  }

  loadFooterInfo(): void {
    this.footerInfoService.getAll().subscribe({
      next: (data) => {
        this.footerInfo = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  loadQuickLinks(): void {
    this.navLinksService.getAll().subscribe({
      next: (data) => {
        this.quickLinks = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  loadOtherLInks(): void {
    this.otherLinksService.getAll().subscribe({
      next: (data) => {
        this.otherLinks = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
