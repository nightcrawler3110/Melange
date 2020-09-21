import { Router } from '@angular/router';
import { cartProducts } from './../cartProduct';
import { ConnectDbService } from './../connect-db.service';
import { ManageLoginService } from './../manage-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  price: number;
  GSTprice: number;
  cartArray: cartProducts[] = new Array();
  date: Date;
  constructor(public manageLoginService: ManageLoginService, public connectDbService: ConnectDbService, public router: Router) {
    this.date = new Date;
    this.date.setDate(this.date.getDate() + 7)
    this.price = 0;
    this.GSTprice = 0;

  }
  ngOnDestroy() {
    console.log("Cart Page Destoryed");
    this.connectDbService.changeQuantityCart(this.cartArray).subscribe((data) => {
      console.log("done");
    }, (err) => {
      console.log(err);
    })
  }
  ngOnInit(): void {
    var obj = { email: this.manageLoginService.email }
    this.connectDbService.getCart(obj).subscribe((data) => {
      this.cartArray = data as cartProducts[];
      var i;
      console.log("length of cartarray", this.cartArray.length)
      for (i = 0; i < this.cartArray.length; i++) {
        console.log("quantity", this.cartArray[i].quantity, this.cartArray[i].price)
        this.price += this.cartArray[i].quantity * this.cartArray[i].price;
        console.log("price", this.price);
      }

      this.GSTprice = this.price + this.price * .18;
      console.log("GstPrice", this.GSTprice)
      console.log("the array of data we got in cartpage", this.cartArray);

    }, (err) => {
      console.log(err);
    })
  }
  setQuantity(obj, modifiedQuantity) {
    console.log(obj, modifiedQuantity);
    
    for (var i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].id == obj.id) {
        if(modifiedQuantity> obj.quantity)
        {
          this.price = this.price + obj.price 
          this.GSTprice = this.price *1.18
        }
        else
        {
         this.price = this.price - obj.price 
         this.GSTprice = this.price *1.18
        }
        this.cartArray[i].quantity = modifiedQuantity;
        break;
      }
    }
  }
  deleteItemEventHandler(obj) {

    this.price = this.price - (obj.price*obj.quantity)
    this.GSTprice = this.price*1.18;
    this.connectDbService.deleteFromCart(obj).subscribe((data) => {
      if(this.router.url=='/cart')
      {
        this.router.navigateByUrl('/cartQ');
      }
      else
      {
        this.router.navigateByUrl('/cart');
      }
      console.log("done");
    }, (err) => {
      console.log(err);
    })
    console.log("item to be deleted", obj);
    

  }
  checkoutEventHandler() {

    this.router.navigateByUrl('/checkout');

  }


}
