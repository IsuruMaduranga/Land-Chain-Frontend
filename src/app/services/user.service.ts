import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
const api = environment.api;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  auth(loginData: any): Observable<any> {
    let url = `${api}/users/login`;
    return this.http.post(url, JSON.stringify(loginData), httpOptions);
  }

  signup(userData: any): Observable<any> {
    let url = `${api}/users/signup`;
    return this.http.post(url, JSON.stringify(userData), httpOptions);
  }

  registerAdmin(userData: any): Observable<any> {
    let url = `${api}/users/registerAdmin`;
    return this.http.post(url, JSON.stringify(userData), httpOptions);
  }

  get user(): any {
    let output;
    let token = localStorage.getItem('token');
    if (!token) {
      output = null;
    } else if (this.jwtHelper.isTokenExpired()) {
      output = null;
      localStorage.removeItem('token');
    } else {
      output = this.jwtHelper.decodeToken(token).type;
    }
    return output;
  }

  get nic(): any {
    let output;
    let token = localStorage.getItem('token');
    if (!token) {
      output = null;
    } else if (this.jwtHelper.isTokenExpired()) {
      output = null;
      localStorage.removeItem('token');
    } else {
      output = this.jwtHelper.decodeToken(token).nic;
    }
    return output;
  }

}