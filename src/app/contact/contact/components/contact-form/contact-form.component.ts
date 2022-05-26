import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    title: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
