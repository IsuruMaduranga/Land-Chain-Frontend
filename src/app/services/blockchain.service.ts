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
export class BlockchainService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    let url = 'http://localhost:4000/api/blockchain/users';
    return this.http.get(url,httpOptions);
  }

  getLands():Observable<any>{
    let url = 'http://localhost:4000/api/blockchain/lands';
    return this.http.get(url,httpOptions);
  }

  changeOwner(ownerData:any):Observable<any>{
    let url = 'http://localhost:4000/api/blockchain/changeOwner';
    let data=JSON.stringify(ownerData);
    return this.http.post(url,data,httpOptions);
  }

  registerLand(landData:any):Observable<any>{
    let url = 'http://localhost:4000/api/blockchain/registerLand';
    let data=JSON.stringify(landData);
    return this.http.post(url,data,httpOptions);
  }

  registerUser(userData:any):Observable<any>{
    let url = 'http://localhost:4000/api/blockchain/registerUser';
    let data=JSON.stringify(userData);
    return this.http.post(url,data,httpOptions);
  }

}
