import { ManageProductDisplayService } from './../manage-product-display.service';
import { ManageLoginService } from './../manage-login.service';
import { Router } from '@angular/router';
import { ConnectDbService } from './../connect-db.service';
import { Component, OnInit } from '@angular/core';
import { Products } from './../products';

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.css']
})
export class WomenPageComponent implements OnInit {
  productsArray: Products[] = new Array();
  constructor(public manageProductDisplayService: ManageProductDisplayService, public connectDbService: ConnectDbService, public router: Router, public manageLoginService: ManageLoginService) { }

  ngOnInit(): void {
    var obj = { type: "women" };
    this.connectDbService.getAllProducts(obj).subscribe((data) => {
      console.log(data);
      this.productsArray = data as Products[];
      console.log(this.productsArray[0].image);
    }, (err) => {
      console.log(err);
    })
  }
  openDisplayEventHandler(product) {
    this.manageProductDisplayService.changeProductDisplay(product);
    this.router.navigateByUrl('/display')
  }
  wishlistEventHandler(product) {
    if (this.manageLoginService.email == "") {
      this.router.navigateByUrl('/login');
    }
    else {
      var obj = {
        email: this.manageLoginService.email, description: product.description, imagea: product.imagea, imageb: product.imageb, imagec: product.imagec, type: product.type,
        id: product.id, name: product.name, image: product.image, price: product.price
      }
      this.connectDbService.addToWishlist(obj).subscribe((data) => {
        var tempObj: any = data["message"]
        if(tempObj==true)
        {
         
        alert("Successfully Added to wishlist")
        }
      }, (err) => {
        console.log(err);
      })
    }
  }
}

