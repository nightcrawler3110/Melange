import { ConnectDbService } from './../connect-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public connectDbService:ConnectDbService) { }

  ngOnInit(): void {
  }
  addNewProductEventHandler(name,id,type,description,price,image,imagea,imageb,imagec)
{
   var obj ={name:name,id:id,type:type,description:description,price:price,image:image,imagea:imagea,imageb:imageb,imagec:imagec}
   this.connectDbService.addNewProduct(obj).subscribe((data) => {

    
    var tempObj: any = data["message"]

    if (tempObj == true) {
      alert("Successfully Added")
    }


  }, (err) => {
    console.log(err);
  });
}
}
