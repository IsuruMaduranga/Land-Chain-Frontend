import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {
  ads:any[];

  constructor(private adService: AdService,private ngf: NgFlashMessageService) { }

  ngOnInit() {
    this.adService.myAds.subscribe(res=>{
      this.ads=res;
    });
  }

  delete(id){
    if(confirm("Do you want to delete this ad?\nThis cannot be undone")){
      this.adService.delete(id).subscribe(res=>{
        if(res.error){
          this.ngf.showFlashMessage({
            messages: [res.msg], 
            dismissible: true, 
            timeout: 2000,
            type: 'danger'
          });
        }else{
          this.ads = this.ads.filter(ad=>ad._id==id);
          this.ngOnInit();
        }
      });
    }
  }

}
