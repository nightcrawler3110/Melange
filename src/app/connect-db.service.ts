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
  getAllProductsHome()
  {
    var myServerUrl =this.myBaseServerUrl+"/api/productsHome";
    return this.httpClient.get(myServerUrl);
  }
  getAllProducts(obj)
  {
    var myServerUrl =this.myBaseServerUrl+"/api/products";
    return this.httpClient.post(myServerUrl,obj);
  }
  getCart(obj)
  {
    var myServerUrl =this.myBaseServerUrl+"/api/cart";
    return this.httpClient.post(myServerUrl,obj);
  }
  changeQuantityCart(obj)
  {
    var myServerUrl =this.myBaseServerUrl+"/api/quantity";
    return this.httpClient.post(myServerUrl,obj);
  }
  deleteFromCart(obj)
  {
    var myServerUrl =this.myBaseServerUrl+"/api/delete";
    return this.httpClient.post(myServerUrl,obj);
  }
  placeOrderStore(obj)
  {
    console.log(obj);
    var myServerUrl =this.myBaseServerUrl+"/api/order";
    return this.httpClient.post(myServerUrl,obj);
  }
  destroyCart(obj)
  {
    var myServerUrl =this.myBaseServerUrl+"/api/destroy";
    return this.httpClient.post(myServerUrl,obj);
  }
  displayOrder(obj)
  {
    var myServerUrl =this.myBaseServerUrl+"/api/displayOrder";
    return this.httpClient.post(myServerUrl,obj);
  }
}
