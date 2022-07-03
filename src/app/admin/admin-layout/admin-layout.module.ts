import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminUserSectionComponent } from './admin-layout/components/admin-user-section/admin-user-section.component';
import { AdminUserLinksComponent } from './admin-layout/components/admin-user-links/admin-user-links.component';
import { AdminNavigationLinksComponent } from './admin-layout/components/admin-navigation-links/admin-navigation-links.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminUserSectionComponent,
    AdminUserLinksComponent,
    AdminNavigationLinksComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    SharedModule
  ]
})
export class AdminLayoutModule { }
