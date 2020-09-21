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

  constructor(public router:Router, public connectDbService:ConnectDbService, public manageLoginService:ManageLoginService) { }

  ngOnInit(): void {
    var obj = {email:this.manageLoginService.email}
    this.connectDbService.destroyCart(obj).subscribe((data) => {
      console.log("Done Deletion")
      }, (err) => {
        console.log(err);
      })

  }

}
