import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class BlockchainService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let url = `${api}/blockchain/users`;
    return this.http.get(url, httpOptions);
  }

  getLands(): Observable<any> {
    let url = `${api}/blockchain/lands`;
    return this.http.get(url, httpOptions);
  }

  getLandsOfUser(): Observable<any> {
    let url = `${api}/blockchain/landsOfUser`;
    return this.http.get(url, httpOptions);
  }

  changeOwner(ownerData: any): Observable<any> {
    let url = `${api}/blockchain/changeOwner`;
    let data = JSON.stringify(ownerData);
    return this.http.post(url, data, httpOptions);
  }

  registerLand(landData: any): Observable<any> {
    let url = `${api}/blockchain/registerLand`;
    let data = JSON.stringify(landData);
    return this.http.post(url, data, httpOptions);
  }

  registerUser(userData: any): Observable<any> {
    let url = `${api}/blockchain/registerUser`;
    let data = JSON.stringify(userData);
    return this.http.post(url, data, httpOptions);
  }

  getLandHistory(userData: any): Observable<any> {
    let url = `${api}/blockchain/landHistory`;
    let data = JSON.stringify(userData);
    return this.http.post(url, data, httpOptions);
  }

  divideLand(Data: any): Observable<any> {
    let url = `${api}/blockchain/divideLand`;
    let data = JSON.stringify(Data);
    return this.http.post(url, data, httpOptions);
  }


}
