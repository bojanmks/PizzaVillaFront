import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';
import { SharedModule } from '../shared/shared.module';
import { ContactMessageDialogComponent } from './contact/components/contact-message-dialog/contact-message-dialog.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactMessageDialogComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
