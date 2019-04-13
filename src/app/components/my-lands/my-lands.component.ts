import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-my-lands',
  templateUrl: './my-lands.component.html',
  styleUrls: ['./my-lands.component.scss']
})
export class MyLandsComponent implements OnInit {
  lands:any[]

  constructor(private bService:BlockchainService) { }

  ngOnInit() {
    this.bService.getLandsOfUser().subscribe(res=>{
      this.lands=res;
    },e=>{
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }

}
