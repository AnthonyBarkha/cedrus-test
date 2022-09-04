import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'fullName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let fullName: string = this.contactForm.value.fullName;
    let message: string = this.contactForm.value.message;
    let email: string = this.contactForm.value.email;
    console.log("Full name: ", fullName);
    console.log("Email: ", email);
    console.log("Message: ", message);
  }

}
