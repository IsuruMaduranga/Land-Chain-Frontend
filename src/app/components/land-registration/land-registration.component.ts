import { Component, OnInit } from '@angular/core';

import { LandRegistrationService } from '../../services/land-registration.service';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.scss']
})
export class LandRegistrationComponent implements OnInit {
  landId: string;
  ownerNIC: string;

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
  }

  onSubmit() {
    const landData = {
      id: this.landId,
      ownerId: this.ownerNIC,
    }

    this.lrService.register(landData).subscribe(res => {
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
