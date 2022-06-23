import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ScrollTopComponent } from './layout/components/scroll-top/scroll-top.component';
import { ContactInfoComponent } from './layout/components/footer/components/contact-info/contact-info.component';
import { QuickLinksComponent } from './layout/components/footer/components/quick-links/quick-links.component';
import { OtherUsefulLinksComponent } from './layout/components/footer/components/other-useful-links/other-useful-links.component';
import { UserSectionComponent } from './layout/components/header/components/user-section/user-section.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,
    ContactInfoComponent,
    QuickLinksComponent,
    OtherUsefulLinksComponent,
    UserSectionComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
