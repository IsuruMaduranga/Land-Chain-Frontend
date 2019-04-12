import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {

  firstName:string;
  lastName:string;
  nic:string;
  email:string;
  password:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(){

    const userData = {
      firstName:this.firstName,
      lastName:this.lastName,
      nic:this.nic,
      email:this.email,
      password:this.password
    }

    this.userService.registerAdmin(userData).subscribe(res=>{
      if(res.token){
        confirm("done");
        this.ngOnInit();
      }else{
        alert(res.msg);
      }
    });
  }

}
