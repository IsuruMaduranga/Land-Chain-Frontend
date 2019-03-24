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

    this.userService.signup(userData).subscribe(res=>{
      console.log(res);
      if(res.token){
        localStorage.setItem('token',res.token);
      }else{
        alert("done");
      }
    });
  }

}
