import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';


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

  get allAds():any{
    let url = 'http://localhost:4000/api/ads';
    return this.http.get(url,httpOptions);
  }

  get myAds():any{
    let url = 'http://localhost:4000/api/ads/my';
    return this.http.get(url,httpOptions);
  }
}
