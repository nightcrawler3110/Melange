 import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectDbService {
  myBaseServerUrl =environment.serverUrl;
  constructor(public httpClient:HttpClient) { }
  doUserValidation(obj)
  {
       
    console.log(this.myBaseServerUrl)
    var myServerUrl =this.myBaseServerUrl + "/api/login";
    console.log(myServerUrl);
    return this.httpClient.post(myServerUrl,obj)
  }
  doRegisterUser(obj)
  {
    console.log(this.myBaseServerUrl)
    var myServerUrl =this.myBaseServerUrl + "/api/signUp";
    console.log(myServerUrl);
    return this.httpClient.post(myServerUrl,obj);
  }
  doCartAddition(obj)
  {

    var myServerUrl =this.myBaseServerUrl + "/api/home";
    console.log("Yes its comming in connectDb",myServerUrl);
    console.log(this.httpClient.post(myServerUrl,obj))
    return this.httpClient.post(myServerUrl,obj);
  }
  getAllProducts()
  {
    var myServerUrl =this.myBaseServerUrl+"/api/products";
    return this.httpClient.get(myServerUrl);
  }
  getCart()
  {
    var myServerUrl =this.myBaseServerUrl+"/api/cart";
    console.log(this.httpClient.get(myServerUrl))
    return this.httpClient.get(myServerUrl);
  }
}
