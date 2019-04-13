import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

import { NgFlashMessageService } from 'ng-flash-messages';
import { LandsComponent } from '../lands/lands.component';

@Component({
  selector: 'app-land-history',
  templateUrl: './land-history.component.html',
  styleUrls: ['./land-history.component.scss']
})
export class LandHistoryComponent implements OnInit {
  landId: String;
  lands: any[];
  previousLand: String;
  currentOwner: String;

  constructor(private bService: BlockchainService, private ngf: NgFlashMessageService) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      landId: this.landId,
    }

    this.bService.getLandHistory(data).subscribe(res => {
      this.previousLand = null;
      this.lands = null;
      this.currentOwner = null;

      this.lands = res;
      if (this.lands[0].previousLand) {
        this.previousLand = this.lands[0].previousLand.split("#")[1];
      }
      if (this.lands[this.lands.length - 1].status === "VALID") {
        this.currentOwner = this.lands[this.lands.length - 1].owner.split("#")[1];
      }

    }, e => {
      this.previousLand = null;
      this.lands = null;
      this.currentOwner = null;
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        this.ngf.showFlashMessage({
          messages: ["History not available!"],
          dismissible: true,
          timeout: 2000,
          type: 'danger'
        });
      }
    });
  }

}
