import { cartProducts } from './../cartProduct';
import { Router } from '@angular/router';
import { ConnectDbService } from './../connect-db.service';
import { ManageLoginService } from './../manage-login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  checkoutForm:FormGroup;
  date:Date;
  price:number;
  GSTprice:number;
 cartArray: cartProducts[] = new Array();
 constructor(public manageLoginService:ManageLoginService, public connectDbService: ConnectDbService,public router:Router) {
    this.price=0;
    this.GSTprice=0;
    this.date= new Date;
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
    this.checkoutForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      zip: new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
      CVV: new FormControl('',[Validators.required,Validators.pattern('[0-9]{3}')]),
      cardName: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required,Validators.pattern('(0[1-9]|10|11|12)/20[0-9]{2}$')]),
      number: new FormControl('',[Validators.required,Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$')])
    });
  }
  checkoutEventHandler(firstName,lastName,zip,address1,address2,cardNumber,cardName,cardCVV)
  {
    var obj = {totalPrice:this.GSTprice,date:this.date,email:this.manageLoginService.email,firstName:firstName,lastName:lastName,zip:zip,address1:address1,address2:address2,cardNumber:cardNumber,cardName:cardName,cardCVV:cardCVV,orderArray:this.cartArray}
    console.log("checkout",obj);
    this.connectDbService.placeOrderStore(obj).subscribe((data) => {
      this.router.navigateByUrl('/successfull');
      }, (err) => {
        console.log(err);
      })
  }

}
