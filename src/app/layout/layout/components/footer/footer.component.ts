import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { IFooterInfo } from './interfaces/i-footer-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerInfo: IFooterInfo[] = [
    {
      icon: "fas fa-map-marker-alt",
      text: "123 Street, New York, USA"
    },
    {
      icon: "fa fa-phone",
      text: "+012 345 67890"
    },
    {
      icon: "fa fa-envelope",
      text: "info@pizzavilla.com"
    }
  ];
  quickLinks: IRoute[] = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ];
  otherLinks: any = [
    {
      name: "Documentation",
      url: "./assets/data/nav-links.json"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/bojan.maksimovic.908"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bojanm___/"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/bojanm_"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
