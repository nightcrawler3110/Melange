import { OrderServiceService } from './../order-service.service';
import { Router } from '@angular/router';
import { ManageLoginService } from './../manage-login.service';
import { ConnectDbService } from './../connect-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful-checkout-page',
  templateUrl: './successful-checkout-page.component.html',
  styleUrls: ['./successful-checkout-page.component.css']
})
export class SuccessfulCheckoutPageComponent implements OnInit {
   date:Date;
   order:any;
  constructor(public orderService:OrderServiceService ,public router:Router, public connectDbService:ConnectDbService, public manageLoginService:ManageLoginService) {
    this.date = new Date;
    this.date.setDate(this.date.getDate() + 7)
   }

  ngOnInit(): void {
    var obj = {email:this.manageLoginService.email}
    this.connectDbService.destroyCart(obj).subscribe((data) => {
      console.log("Done Deletion")
      this.order= this.orderService.order;
      }, (err) => {
        console.log(err);
      })

  }

}
