import { Component, OnInit } from '@angular/core';
import { IRouteIcon } from 'src/app/shared/interfaces/i-route';

@Component({
  selector: 'app-admin-navigation-links',
  templateUrl: './admin-navigation-links.component.html',
  styleUrls: ['./admin-navigation-links.component.scss']
})
export class AdminNavigationLinksComponent implements OnInit {

  links: IRouteIcon[] = [
    {
      name: "Audit Log",
      path: "/admin/auditlog",
      icon: "list"
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "person"
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: "local_pizza"
    },
    {
      name: "Product Categories",
      path: "/admin/categories",
      icon: "sort"
    },
    {
      name: "Ingredients",
      path: "/admin/ingredients",
      icon: "restaurant"
    },
    {
      name: "Addons",
      path: "/admin/addons",
      icon: "restaurant_menu"
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "monetization_on"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
