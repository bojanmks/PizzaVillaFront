import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author/author.component';
import { SocialLinksComponent } from './author/components/social-links/social-links.component';


@NgModule({
  declarations: [
    AuthorComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
