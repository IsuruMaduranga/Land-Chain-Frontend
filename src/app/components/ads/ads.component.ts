import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  ads: any[];



  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.allAds.subscribe(res => {
      this.ads = res;
    });
  }

}
