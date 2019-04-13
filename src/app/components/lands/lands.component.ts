import { Component, OnInit } from '@angular/core';

import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.scss']
})
export class LandsComponent implements OnInit {
  lands:any[]

  constructor(private bService:BlockchainService) { }

  ngOnInit() {
    this.bService.getLands().subscribe(res=>{
      this.lands=res;
    },e => {
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }

}
