import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment';
const api = environment.api;


import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http:HttpClient) { }

  getAllAds():Observable<any>{
    let url = `${api}/ads`;
    return this.http.get(url,httpOptions);
  }

  getMyAds():Observable<any>{
    let url = `${api}/ads/my`;
    return this.http.get(url,httpOptions);
  }

  delete(id):Observable<any>{
    let url = `${api}/ads/${id}`;
    return this.http.delete(url,httpOptions);
  }

  post(adData:any):Observable<any>{
    let url = `${api}/ads`;
    let data=JSON.stringify(adData);
    return this.http.post(url,data,httpOptions);
  }
}
