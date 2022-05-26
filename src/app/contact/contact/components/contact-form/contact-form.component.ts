import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../../services/forms/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  //form: FormGroup = null;

  constructor(
    public contactFormService: ContactFormService
  ) { }

  ngOnInit(): void {
    this.contactFormService.initializeForm();
  }

}
