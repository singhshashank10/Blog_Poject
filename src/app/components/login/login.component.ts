import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag: boolean = true;

  login = new FormGroup({
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required,)
  })

  loginSubmit() {
    console.log('login id is: ' + (this.login.value).loginId);
    console.log('login password is: ' + (this.login.value).password);
  }

  checkFlag() {
    this.flag = false;

  }
}
