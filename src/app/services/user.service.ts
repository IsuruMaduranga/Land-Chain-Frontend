import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';

import { LoginData } from '../models/LoginData';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }

  auth(loginData:LoginData):Observable<any>{
    let url = 'http://localhost:4000/api/users/login';
    return this.http.post(url,JSON.stringify(loginData),httpOptions);
  }

  signup(userData:any):Observable<any>{
    let url = 'http://localhost:4000/api/users/signup';
    return this.http.post(url,JSON.stringify(userData),httpOptions);
  }

}