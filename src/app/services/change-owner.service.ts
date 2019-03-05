import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ChangeOwnerService {

  url = 'http://localhost:4000/api/blockchain/changeOwner';

  constructor(private http:HttpClient) { }

  change(userData:any):Observable<any>{
    let data=JSON.stringify(userData);
    return this.http.post(this.url,data,httpOptions);
  }
}
