import { Router } from '@angular/router';
import { ManageProductDisplayService } from './../manage-product-display.service';
import { ConnectDbService } from './../connect-db.service';
import { ManageLoginService } from './../manage-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {
  wishlistArray: any = new Array();
  constructor(public manageProductDisplayService: ManageProductDisplayService, public router: Router, public manageLoginService: ManageLoginService, public connectDbService: ConnectDbService) { }

  ngOnInit(): void {
    var obj = { email: this.manageLoginService.email }
    this.connectDbService.displayWishlist(obj).subscribe((data) => {
      this.wishlistArray = data;
       
    }, (err) => {
      console.log(err);
    })
  }
  deleteItemEventHandler(obj) {
     
    this.connectDbService.deleteFromWishlist(obj).subscribe((data) => {
      var tempObj: any = data["message"]
        if(tempObj==true)
        {
      if (this.router.url == '/wishlist') {
        this.router.navigateByUrl('/wishlistQ');
      }
      else {
        this.router.navigateByUrl('/wishlist');
      }
      
    }
    }, (err) => {
      console.log(err);
    })
     
}
openDisplayEventHandler(wishlist)
{
  this.manageProductDisplayService.changeProductDisplay(wishlist);
  this.router.navigateByUrl('/display')
}
}
