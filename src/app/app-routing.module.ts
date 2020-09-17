import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login", component:LoginPageComponent},
  {path: "signUp", component:SignUpPageComponent},
  {path: "forgotPassword", component:ForgotPasswordPageComponent},
  {path: "home", component:HomePageComponent},
  {path:"display",component:DisplayPageComponent},
  {path: "profile",component:ProfilePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
