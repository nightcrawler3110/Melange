import { Router } from '@angular/router';
import { ManageLoginService } from './../manage-login.service';
import { Products } from './../products';
import { ConnectDbService } from './../connect-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productsArray: Products[] = new Array();
  constructor(public connectDbService: ConnectDbService, public manageLoginService: ManageLoginService, public router: Router) { }

  ngOnInit(): void {

    this.connectDbService.getAllProductsHome().subscribe((data) => {
      console.log(data);
      this.productsArray = data as Products[];
      console.log(this.productsArray[0].image);
    }, (err) => {
      console.log(err);
    })
  }
  addToBagEventHandler(id, image, name, type, price) {
    if (this.manageLoginService.email == "") {
      this.router.navigateByUrl('/login');
    }
    else {
      var cart = { email: this.manageLoginService.email, id: id, name: name, type: type, price: price, image:image }
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
}


