import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './admin/admin-layout/admin-layout.module';
import { AdminGuard } from './admin/admin-layout/admin-layout/guards/admin.guard';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { title: "Home" }
      },
      {
        path: "menu",
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
        data: { title: "Menu" }
      },
      {
        path: "contact",
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        data: { title: "Contact" }
      },
      {
        path: "author",
        loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
        data: { title: "Author" }
      },
      {
        path: "cart",
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
        canActivate: [AuthGuard],
        data: { title: "Cart" }
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "auditlog",
        pathMatch: "full"
      },
      {
        path: "auditlog",
        loadChildren: () => import('./admin/audit-log/audit-log.module').then(m => m.AuditLogModule)
      },
      {
        path: "users",
        loadChildren: () => import('./admin/admin-users/admin-users.module').then(m => m.AdminUsersModule)
      },
      {
        path: "products",
        loadChildren: () => import('./admin/admin-products/admin-products.module').then(m => m.AdminProductsModule)
      },
      {
        path: "categories",
        loadChildren: () => import('./admin/admin-product-categories/admin-product-categories.module').then(m => m.AdminProductCategoriesModule)
      },
      {
        path: "orders",
        loadChildren: () => import('./admin/admin-orders/admin-orders.module').then(m => m.AdminOrdersModule)
      }
    ],
    data: {
      title: 'Admin Panel'
    },
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    LayoutModule,
    AdminLayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }
