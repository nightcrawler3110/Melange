import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

export class CustonFormValidations {
  static emailValidation(control: AbstractControl): ValidationErrors | null {
    const globalPattern = /(?=.*[@])(?=.*[.])/;
    return globalPattern.test(control.value) ? null : {emailValidation : true};
  }
  static passwordValidation(control: AbstractControl): ValidationErrors | null {
    const globalPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return globalPattern.test(control.value) ? null : {passwordValidation: true};
  }
  static confirmPasswordValidator(password, confirmPassword) {
      return (control: FormControl)=>{
          if(!control)
          {
              return null;
          }
          // console.log(control.get(password).value==control.get(confirmPassword).value ? null : {confirmPasswordValidator:true});
          return control.get(password).value==control.get(confirmPassword).value ? null : {confirmPasswordValidator:true};
      }
  }
}