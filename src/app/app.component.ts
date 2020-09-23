import { ConnectDbService } from './connect-db.service';
import { Router } from '@angular/router';
import { ManageLoginService } from './manage-login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'melange';
  constructor(public connectDbService:ConnectDbService ,public manageLoginService :ManageLoginService,public router:Router) {}
  wishlistEventHandler()
  {
    if(this.manageLoginService.email=="")
    {
            this.router.navigateByUrl('/login')
    }
    else
    {
      console.log(this.manageLoginService.email)
      this.router.navigateByUrl('/wishlist')
    }
  }
  cartEventHandler()
  {
    if(this.manageLoginService.email=="")
    {
            this.router.navigateByUrl('/login')
    }
    else
    {
      console.log(this.manageLoginService.email)
      this.router.navigateByUrl('/cart')
    }
  }
  homePageEventHandler()
  {
    this.router.navigateByUrl('/home')
  }
  ordersEventHandler()
  {
    if(this.manageLoginService.email=="")
    {
        this.router.navigateByUrl('/login')
    }
    else
    {
      console.log(this.manageLoginService.email)
      this.router.navigateByUrl('/orders')
    }
  }
  logoutEventHandler()
  {
    this.manageLoginService.saveEmail("");
    this.router.navigateByUrl('/home')
  }
  adminEventHandler()
  {
    if(this.manageLoginService.email=="")
    {
            this.router.navigateByUrl('/login')
    }
    else if(this.manageLoginService.type=="")
    {
      alert("Admin Login Required")   
    }
    else
    {
      console.log(this.manageLoginService.email)
      this.router.navigateByUrl('/admin')
    }
  }
  sendReplyEventHandler(name,email,reply)
  {
    var obj = {name:name,email:email,reply:reply}
    this.connectDbService.sendReply(obj).subscribe((data) => {
      
      alert("Successfully Sent The Reply")
    }, (err) => {
      console.log(err);
    })
  }
  }

