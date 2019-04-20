import { Component, OnInit } from '@angular/core';

import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.scss']
})
export class LandRegistrationComponent implements OnInit {
  landId: string;
  ownerNIC: string;

  constructor(private bService: BlockchainService) { }

  ngOnInit() {
  }

  onSubmit() {
    const landData = {
      id: this.landId,
      ownerId: this.ownerNIC,
    }

    this.bService.registerLand(landData).subscribe(res => {
      this.landId = null;
      this.ownerNIC = null;
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
