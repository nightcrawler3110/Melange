import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageLoginService {
 email: string;
  constructor() {
    this.email="";
   }
  saveEmail(email)
  {
    this.email=email;
  }
}
