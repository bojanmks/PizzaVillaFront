import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../../services/forms/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(
    public contactFormService: ContactFormService
  ) { }

  ngOnInit(): void {
    this.contactFormService.initializeForm();
  }

  submit(): void {
    this.contactFormService.submitForm();
  }

}
