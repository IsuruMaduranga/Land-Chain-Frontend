import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandRegistrationComponent } from './components/land-registration/land-registration.component';
import { UsersComponent } from './components/users/users.component';
import { LandsComponent } from './components/lands/lands.component';
import { ChangeOwnerComponent } from './components/change-owner/change-owner.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { MyLandsComponent } from './components/my-lands/my-lands.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { LandHistoryComponent } from './components/land-history/land-history.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';
import { DivideLandComponent } from './components/divide-land/divide-land.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'landRegistration',component:LandRegistrationComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin']}},
  {path:'users',component:UsersComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin']}},
  {path:'lands',component:LandsComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin','user']}},
  {path:'changeOwner',component:ChangeOwnerComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin']}},
  {path:'adminRegistration',component:AdminRegistrationComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin']}},
  {path:'myLands',component:MyLandsComponent,canActivate: [AuthGuard],data: { expectedRole: ['user']}},
  {path:'createAd',component:CreateAdComponent,canActivate: [AuthGuard],data: { expectedRole: ['user']}},
  {path:'landHistory',component:LandHistoryComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin','user']}},
  {path:'myAds',component:MyAdsComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin','user']}},
  {path:'divideLand',component:DivideLandComponent,canActivate: [AuthGuard],data: { expectedRole: ['admin']}},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
