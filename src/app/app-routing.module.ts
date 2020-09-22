import { OrderHistoryPageComponent } from './order-history-page/order-history-page.component';
import { SuccessfulCheckoutPageComponent } from './successful-checkout-page/successful-checkout-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { AccessoriesPageComponent } from './accessories-page/accessories-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { MenPageComponent } from './men-page/men-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login", component:LoginPageComponent},
  {path: "signUp", component:SignUpPageComponent},
  {path: "forgotPassword", component:ForgotPasswordPageComponent},
  {path: "home", component:HomePageComponent},
  {path:"display",component:DisplayPageComponent},
  {path: "profile",component:ProfilePageComponent},
  {path: "men", component:MenPageComponent},
  {path: "women", component:WomenPageComponent},
  {path:"kids", component:KidsPageComponent},
  {path:"accessories",component:AccessoriesPageComponent},
  {path: "offers", component:OffersPageComponent},
  {path: "wishlist", component:WishlistPageComponent},
  {path: "wishlistQ", component:WishlistPageComponent},
  {path:"cart",component:CartPageComponent},
  {path: "cartQ",component:CartPageComponent},
  {path: "successfull",component:SuccessfulCheckoutPageComponent},
  {path: "checkout", component:CheckoutPageComponent},
  {path: "orders", component:OrderHistoryPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
