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
export class AdvertismentService {

  url = 'http://localhost:4000/api/Ads';

  constructor(private http:HttpClient) { }

  postAd(adData:any):Observable<any>{
    let data=JSON.stringify(adData);
    return this.http.post(this.url,data,httpOptions);
  }
}
