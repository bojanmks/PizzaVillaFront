import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
