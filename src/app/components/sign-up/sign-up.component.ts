import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isFormSubmitted: boolean = false;

  // formObjects = [
  //   { type: "text", class: "firstName", placeHolder: "Enter your First Name", errorRequired: "This feild is required" },
  //   { type: "text", class: "lastName", placeHolder: "Enter your Last Name", errorRequired: "This feild is required" },
  //   { type: "email", class: "email", placeHolder: "Enter your email", errorRequired: "This feild is required" },
  //   { type: "text", class: "contact", placeHolder: "Enter your mobile/phone number", errorRequired: "This feild is required" },
  //   { type: "password", class: "password", placeHolder: "Enter your password", errorRequired: "This feild is required" },
  //   { type: "password", class: "reEnteredPassword", placeHolder: "Re-enter your password", errorRequired: "This feild is required" },
  // ]

  signUpForm = new FormGroup(
    {
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      contact: new FormControl("", [Validators.required]),
      password: new FormControl('', [Validators.required]),
      reEnteredPassword: new FormControl("", [Validators.required]),
    }
  )

  formSubmitted() {
    this.isFormSubmitted = true
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
    }
    else {
      console.log('Form is invalid')
      this.signUpForm.markAllAsTouched();
    }
  }
}
