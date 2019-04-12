import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  landId:String;
  size:String;
  phone:String;
  price:String;
  city:String;


  constructor(private adService:AdService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

    const adData = {
      landId:this.landId,
      size:this.size,
      phone:this.phone,
      price:this.price,
      city:this.city
    }

    this.adService.post(adData).subscribe(res=>{
      if(res.error){
        alert(res.msg);
      }else{
        alert('done');
        this.router.navigate(['/createAd']);
      }
    });
  }

}
