import { ManageLoginService } from './../manage-login.service';
import { ConnectDbService } from './../connect-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.component.html',
  styleUrls: ['./order-history-page.component.css']
})
export class OrderHistoryPageComponent implements OnInit {
   ordersArray: any = new Array();
  constructor(public connectDbService:ConnectDbService, public manageLoginService:ManageLoginService) { }

  ngOnInit(): void {
    var obj ={email:this.manageLoginService.email}
    this.connectDbService.displayOrder(obj).subscribe((data) => {
    this.ordersArray= data;
     
      }, (err) => {
        console.log(err);
      })
  }

}
