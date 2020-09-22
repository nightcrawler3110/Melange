import { ConnectDbService } from './../connect-db.service';
import { ManageLoginService } from './../manage-login.service';
import { Router } from '@angular/router';
import { ManageProductDisplayService } from './../manage-product-display.service';
import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  product;
  usertype;
  displayProductSize:string;
  constructor(public manageProductDisplayService:ManageProductDisplayService,public router:Router,public manageLoginService:ManageLoginService, public connectDbService:ConnectDbService) {
    this.showProduct() ;
    this.displayProductSize="M"
    this.usertype= this.manageLoginService.type;
   }
   showProduct()
   {
     this.product=this.manageProductDisplayService.product;
     console.log(this.product);
   }
  ngOnInit(): void {
     
      
  }
  
  addToBagEventHandler(id,name,price,image,type) {
    if (this.manageLoginService.email == "") {
      this.router.navigateByUrl('/login');
    }
    else {
      var size=this.displayProductSize;
      console.log("size",size);
      var cart = {size:size,quantity:1,email: this.manageLoginService.email, id: id, name: name, type: type, price: price, image:image }
      console.log(cart);
      this.connectDbService.doCartAddition(cart).subscribe((data) => {

        console.log(data);
        var tempObj: any = data["message"]

        if (tempObj == true) {
          alert("Successfully Added to Cart")
        }


      }, (err) => {
        console.log(err);
      });


    }
  }
  wishlistEventHandler(id,name,price,image,type,imagea,imageb,imagec,description) {
    if (this.manageLoginService.email == "") {
      this.router.navigateByUrl('/login');
    }
    else {
      var obj = { email: this.manageLoginService.email, id:id, name: name, image: image, price: price,imagea:imagea,imageb:imageb,imagec:imagec,description:description }
      this.connectDbService.addToWishlist(obj).subscribe((data) => {
        console.log("succesfully added to wishlist");
        alert("Successfully Added to wishlist")
      }, (err) => {
        console.log(err);
      })
    }
  }
  deleteProductEventHandler(id)
  {
    var obj ={id:id};
    this.connectDbService.deleteProduct(obj).subscribe((data)=>{
      var tempObj:any = data["message"]  ;
      if (tempObj==true){ 
    this.router.navigateByUrl('/home') ;
      }
    },(err)=>{
  
    }) ;
    

  }

}
