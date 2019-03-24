import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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

    this.userService.signup(userData).subscribe(res=>{
      console.log(res);
      if(res.token){
        localStorage.setItem('token',res.token);
        this.router.navigate(['/']);
      }else{
        alert("Error!");
      }
    });
  }

}
