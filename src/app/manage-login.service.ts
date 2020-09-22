import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageLoginService {
 email: string;
 type:string;
  constructor() {
    this.email="";
    this.type="";
   }
  saveEmail(email)
  {
    this.email=email;
  }
  saveType(type)
  {
    this.type=type;
  }
}
