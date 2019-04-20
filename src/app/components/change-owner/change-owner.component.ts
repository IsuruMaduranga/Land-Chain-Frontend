import { Component, OnInit } from '@angular/core';

import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-change-owner',
  templateUrl: './change-owner.component.html',
  styleUrls: ['./change-owner.component.scss']
})
export class ChangeOwnerComponent implements OnInit {

  constructor(private bService: BlockchainService) { }
  landId: String;
  newOwnerId: String;

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      landId: this.landId,
      newOwnerId: this.newOwnerId
    }

    this.bService.changeOwner(data).subscribe(res => {
      this.landId = null;
      this.newOwnerId = null;
      alert("done");
    }, e => {
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }

}
