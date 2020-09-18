import { ManageLoginService } from './manage-login.service';
import { HttpClientModule } from '@angular/common/http';
import { ConnectDbService } from './connect-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ForgotPasswordPageComponent,
    HomePageComponent,
    DisplayPageComponent,
    ProfilePageComponent,
    CartPageComponent,
    WishlistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectDbService,ManageLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
