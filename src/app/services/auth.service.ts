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
export class AuthService {

  url = 'http://localhost:4000/api/users/login';

  constructor(private http:HttpClient) { }

  auth(loginData:LoginData):Observable<any>{
    return this.http.post(this.url,JSON.stringify(loginData),httpOptions);
  }
}
