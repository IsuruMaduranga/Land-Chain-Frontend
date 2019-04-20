import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandRegistrationComponent } from './components/land-registration/land-registration.component';
import { UsersComponent } from './components/users/users.component';
import { LandsComponent } from './components/lands/lands.component';
import { ChangeOwnerComponent } from './components/change-owner/change-owner.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { MyLandsComponent } from './components/my-lands/my-lands.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { LandHistoryComponent } from './components/land-history/land-history.component';
import { AdsComponent } from './components/ads/ads.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    LandRegistrationComponent,
    UsersComponent,
    LandsComponent,
    ChangeOwnerComponent,
    AdminRegistrationComponent,
    MyLandsComponent,
    CreateAdComponent,
    LandHistoryComponent,
    AdsComponent,
    MyAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        headerName: 'x-auth',
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['example.com/examplebadroute/'],
        authScheme: ''
      }
    }),
    NgFlashMessagesModule.forRoot()
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
