import { ManageProductDisplayService } from './manage-product-display.service';
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
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { AccessoriesPageComponent } from './accessories-page/accessories-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderHistoryPageComponent } from './order-history-page/order-history-page.component';
import { SuccessfulCheckoutPageComponent } from './successful-checkout-page/successful-checkout-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

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
    WishlistPageComponent,
    MenPageComponent,
    WomenPageComponent,
    KidsPageComponent,
    OffersPageComponent,
    AccessoriesPageComponent,
    CheckoutPageComponent,
    OrderHistoryPageComponent,
    SuccessfulCheckoutPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectDbService,ManageLoginService,ManageProductDisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
