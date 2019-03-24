import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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

  constructor(private userService:UserService, private router:Router) { }

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
      console.log(res);
      if(res.token){
        alert("Done");
        this.router.navigate(['/adminRegistration']);
      }else{
        alert("Error");
      }
    });
  }

}
