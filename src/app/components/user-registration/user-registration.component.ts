import { Component, OnInit } from '@angular/core';

import { UserRegistrationService } from '../../services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  nic:string;

  constructor(private urService:UserRegistrationService) { }

  ngOnInit() {
  }

  onSubmit(){
    const userData = {
      nic:this.nic
    }

    this.urService.register(userData).subscribe(res=>{
      if(res.error){
        alert("Error!");
      }else{
        alert("done");
      }
    });
  }

}
