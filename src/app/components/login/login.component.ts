import { Component, OnInit } from '@angular/core';

import { LoginData } from '../../models/LoginData';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nic:string;
  password:string;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const logindata = new LoginData(this.nic,this.password);
    this.userService.auth(logindata).subscribe(res=>{
      console.log(res);
      if(res.token){
        localStorage.setItem('token',res.token);
        this.router.navigate(['/']);
      }else{
        alert('Invalid credentials');
      }
    });
  }

}
