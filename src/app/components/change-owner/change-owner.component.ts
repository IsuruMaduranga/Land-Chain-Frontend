import { Component, OnInit } from '@angular/core';

import { ChangeOwnerService } from '../../services/change-owner.service';

@Component({
  selector: 'app-change-owner',
  templateUrl: './change-owner.component.html',
  styleUrls: ['./change-owner.component.scss']
})
export class ChangeOwnerComponent implements OnInit {

  constructor(private coService:ChangeOwnerService) { }
  landId:String;
  newOwnerId:String;

  ngOnInit() {
  }

  onSubmit(){
    const data = {
      landId:this.landId,
      newOwnerId:this.newOwnerId
    }

    this.coService.change(data).subscribe(res=>{
      if(res.error){
        alert("Error!");
      }else{
        alert("done");
      }
    });
  }

}
