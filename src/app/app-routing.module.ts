import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LandRegistrationComponent } from './components/land-registration/land-registration.component';
import { UsersComponent } from './components/users/users.component';
import { LandsComponent } from './components/lands/lands.component';
import { ChangeOwnerComponent } from './components/change-owner/change-owner.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userRegistration',component:UserRegistrationComponent},
  {path:'landRegistration',component:LandRegistrationComponent},
  {path:'users',component:UsersComponent},
  {path:'lands',component:LandsComponent},
  {path:'changeOwner',component:ChangeOwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
