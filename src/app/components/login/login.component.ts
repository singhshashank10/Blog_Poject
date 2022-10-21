import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login = new FormGroup({
    loginId: new FormControl(''),
    password: new FormControl('')
  })

  loginsubmit() {
    console.log('login id is: ' + (this.login.value).loginId);
    console.log('login password is: ' + (this.login.value).password);
  }
}
