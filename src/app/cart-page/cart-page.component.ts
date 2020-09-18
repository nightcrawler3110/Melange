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
   
  cartArray: cartProducts[] = new Array();
  date:Date;
  constructor(public manageLoginService:ManageLoginService, public connectDbService: ConnectDbService) {
    this.date =new Date;
     this.date.setDate(this.date.getDate()+7)
   }

  ngOnInit(): void {
     
    this.connectDbService.getCart().subscribe((data) => {
      
    this.cartArray = data as cartProducts[];
    console.log("the array of data we got in cartpage",this.cartArray);
      
    }, (err) => {
      console.log(err);
    })
  }
  

}
