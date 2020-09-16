import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustonFormValidations } from '../custon-form-validations.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotEmail: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.forgotEmail = new FormControl('', [Validators.required, CustonFormValidations.emailValidation]);
  }

}

