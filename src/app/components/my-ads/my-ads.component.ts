import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {
  ads: any[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.myAds.subscribe(res => {
      this.ads = res;
    }, e => {
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }

  delete(id) {
    if (confirm("Do you want to delete this ad?\nThis cannot be undone")) {
      this.adService.delete(id).subscribe(res => {
        this.ads = this.ads.filter(ad => ad._id == id);
        this.ngOnInit();
      }, e => {
        if (e.error instanceof ProgressEvent) {
          alert('An error occurred!');
        } else {
          alert(e.error.message);
        }
      });
    }
  }

}
