import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

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
      }
    ]
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
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
