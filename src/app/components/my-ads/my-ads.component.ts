import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {
  ads:any[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.myAds.subscribe(res=>{
      this.ads=res;
    });
  }

}
