import { ConnectDbService } from './../connect-db.service';
import { CustonFormValidations } from './../custon-form-validations.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  resgisterValidationMessage: string;
  signUpForm: FormGroup;
  passwordType: string;

  constructor(public connectDbService: ConnectDbService,public router:Router) { 
    this.passwordType = 'weak';
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, CustonFormValidations.emailValidation]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
      rePassword : new FormControl('', Validators.required)
    },
    {
      validators : CustonFormValidations.confirmPasswordValidator('password', 'rePassword')
    });
  }

  setPasswordType(passwordValue: string): void{
    // console.log("got value "+ passwordValue);
    if(!passwordValue){
      this.passwordType = 'very weak';
      return;
    }
    var upper = /(?=.*?[A-Z])/;
    var lower = /(?=.*?[a-z])/;
    var number = /(?=.*?[0-9])/;
    var special = /(?=.*?[#?!@$%^&*-])/;
    
    var isUpper = upper.test(passwordValue);
    var isLower =  lower.test(passwordValue);
    var isNumber = number.test(passwordValue);
    var isSpecial =  special.test(passwordValue);
    var tot = (Number(isUpper) + Number(isLower) + Number(isNumber) + Number(isSpecial));
    
    if(passwordValue.length >= 8){
      if(tot==4){
        this.passwordType = 'very strong';
        return;
      }
      if(tot==3){
        this.passwordType = 'strong';
        return;
      }
      if(tot==2){
        this.passwordType = 'good';
        return;
      }
    }else{
      if(tot == 4){
        this.passwordType = 'strong';
        return;
      }
      if(tot == 3){
        this.passwordType = 'good';
        return;
      }
    }

    if(tot==1 && passwordValue.length<12){
      this.passwordType = 'very weak';
      return;
    }

    this.passwordType = 'weak';
  }
  signUpEventHandler() {
    var user = { email: this.signUpForm.value.email, password: this.signUpForm.value.password, name:this.signUpForm.value.name }
    console.log("signUpevent")
    this.connectDbService.doRegisterUser(user).subscribe((data) => {
      console.log("validation")
      console.log(data);
      var tempObj: any = data["message"]

      if (tempObj == true) {
        this.resgisterValidationMessage = "Succesful"
        this.router.navigateByUrl('/login');
      }
      else {
        this.resgisterValidationMessage = "Email already exists";
      }

    }, (err) => {
      console.log(err);
    });

  }
}
