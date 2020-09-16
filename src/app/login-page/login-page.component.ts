import { CustonFormValidations } from './../custon-form-validations.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, CustonFormValidations.emailValidation]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signUpPage(): void{
    // console.log("going to signup page");
    this.router.navigateByUrl('/signUp');
  }
}


