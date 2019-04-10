import { Component, OnInit } from '@angular/core';

import { LandRegistrationService } from '../../services/land-registration.service';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.scss']
})
export class LandRegistrationComponent implements OnInit {
  landId:string;
  ownerNIC:string;
  size:Number;

  constructor(private lrService:LandRegistrationService) { }

  ngOnInit() {
  }

  onSubmit(){
    const landData = {
      id:this.landId,
      ownerId:this.ownerNIC,
    }

    this.lrService.register(landData).subscribe(res=>{
      if(res.error){
        alert("Error!");
      }else{
        alert("done");
      }
    });
  }


  
}
