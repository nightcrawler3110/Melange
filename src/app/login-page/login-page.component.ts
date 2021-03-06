import { stringify } from '@angular/compiler/src/util';
import { ManageLoginService } from './../manage-login.service';
import { ConnectDbService } from './../connect-db.service';
import { CustonFormValidations } from './../custon-form-validations.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userValidationFailMessage: string;
  loginForm:FormGroup;

  constructor(public router: Router,public connectDbService:ConnectDbService,public manageLoginService: ManageLoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, CustonFormValidations.emailValidation]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  loginEventHandler() {
    var user = { email: this.loginForm.value.email, password: stringify(Md5.hashStr(this.loginForm.value.password))}
     
    this.connectDbService.doUserValidation(user).subscribe((data) => {
       
      var tempObj: any = data["message"]

      if (tempObj == "user") {
        this.manageLoginService.saveEmail(this.loginForm.value.email);
        this.router.navigateByUrl('/home');
      }
      else if(tempObj == "admin")
      {

        this.manageLoginService.saveEmail(this.loginForm.value.email);
        this.manageLoginService.saveType("admin")
        this.router.navigateByUrl('/admin');
      }
      else {
        this.userValidationFailMessage = "Invalid";
      }

    }, (err) => {
      console.log(err);
    });

  }

  signUpPage(): void{
    // console.log("going to signup page");
    this.router.navigateByUrl('/signUp');
  }
}


