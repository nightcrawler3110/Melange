import { cartProducts } from './../cartProduct';
import { Router } from '@angular/router';
import { ConnectDbService } from './../connect-db.service';
import { ManageLoginService } from './../manage-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  price:number;
  GSTprice:number;
 cartArray: cartProducts[] = new Array();
 constructor(public manageLoginService:ManageLoginService, public connectDbService: ConnectDbService,public router:Router) {
    this.price=0;
    this.GSTprice=0;
  }

 
  ngOnInit(): void {
    var obj ={email:this.manageLoginService.email} 
    this.connectDbService.getCart(obj).subscribe((data) => {
    this.cartArray = data as cartProducts[];
    var i;
    console.log("length of cartarray",this.cartArray.length)
    for(i=0; i< this.cartArray.length;i++)
    {
      console.log("quantity",this.cartArray[i].quantity,this.cartArray[i].price)
       this.price += this.cartArray[i].quantity * this.cartArray[i].price; 
      console.log("price",this.price);
    }

    this.GSTprice = this.price + this.price*.18;
    console.log("GstPrice",this.GSTprice)
    console.log("the array of data we got in cartpage",this.cartArray);
      
    }, (err) => {
      console.log(err);
    })
  }

}
