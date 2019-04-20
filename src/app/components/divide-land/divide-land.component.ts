import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-divide-land',
  templateUrl: './divide-land.component.html',
  styleUrls: ['./divide-land.component.scss']
})
export class DivideLandComponent implements OnInit {
  id: String;
  newIds: String;

  constructor(private bService: BlockchainService) { }

  ngOnInit() {
  }

  onSubmit() {
    let nIds = this.newIds.split(",");

    let valid = true;
    nIds.forEach(e1 => {
      let count = 0;
      nIds.forEach(e2 => {
        if (e1 === e2) {
          count++;
        }
      });
      if (count > 1) {
        valid = false;
      }
    });

    if (!valid) {
      alert('Two new land id\'s cannot be equal');
      this.newIds = null;
    } else {
      const data = {
        landId: this.id,
        newIds: nIds
      };

      this.bService.divideLand(data).subscribe(res => {
        this.id = null;
        this.newIds = null;
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

}
