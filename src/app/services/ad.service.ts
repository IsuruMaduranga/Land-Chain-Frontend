import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http:HttpClient) { }

  get allAds():Observable<any>{
    let url = 'http://localhost:4000/api/ads';
    return this.http.get(url,httpOptions);
  }

  get myAds():Observable<any>{
    let url = 'http://localhost:4000/api/ads/my';
    return this.http.get(url,httpOptions);
  }

  delete(id):Observable<any>{
    let url = `http://localhost:4000/api/ads/${id}`;
    return this.http.delete(url,httpOptions);
  }

  post(adData:any):Observable<any>{
    let url = 'http://localhost:4000/api/ads';
    let data=JSON.stringify(adData);
    return this.http.post(url,data,httpOptions);
  }
}
