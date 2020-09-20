import { ManageProductDisplayService } from './../manage-product-display.service';
import { ManageLoginService } from './../manage-login.service';
import { Router } from '@angular/router';
import { ConnectDbService } from './../connect-db.service';
import { Component, OnInit } from '@angular/core';
import { Products } from './../products';
@Component({
  selector: 'app-men-page',
  templateUrl: './men-page.component.html',
  styleUrls: ['./men-page.component.css']
})
export class MenPageComponent implements OnInit {
  productsArray: Products[] = new Array();
  constructor(public manageProductDisplayService:ManageProductDisplayService, public connectDbService:ConnectDbService,public router:Router,public manageLoginService:ManageLoginService) { }

  ngOnInit(): void {
    var obj ={ type:"men"};
    this.connectDbService.getAllProducts(obj).subscribe((data) => {
      console.log(data);
      this.productsArray = data as Products[];
      console.log(this.productsArray[0].image);
    }, (err) => {
      console.log(err);
    })
  }
  openDisplayEventHandler(product)
  {
    this.manageProductDisplayService.changeProductDisplay(product);
    this.router.navigateByUrl('/display')
  }
}
