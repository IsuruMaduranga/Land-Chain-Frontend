import { Component, OnInit } from '@angular/core';

import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any[];

  constructor(private bService:BlockchainService) { }

  ngOnInit() {
    this.bService.getUsers().subscribe(res=>{
      this.users=res;
      console.log(res);
    });
  }

}
