import { Component, OnInit } from '@angular/core';

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
    const logindata = {
      nic:this.nic,
      password:this.password
    };

    this.userService.auth(logindata).subscribe(data=>{
      if(data.token){
        localStorage.setItem('token',data.token);
        this.router.navigate(['/']);
      }else{
        alert("Server error");
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
