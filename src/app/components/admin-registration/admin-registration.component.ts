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
  password1:string;

  constructor(private userService:UserService,private router:Router) { }

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
      this.firstName = null;
      this.lastName = null;
      this.nic = null;
      this.email = null;
      this.password =null;
      this.password1 =null;
      
      if(res.token){
        alert("done");
        this.router.navigate(["/"]);
      }else{
        alert("Server Error!");
      }
    },e=>{
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }

}
