import { Component, OnInit } from '@angular/core';

import { LoginData } from '../../models/LoginData';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nic:string;
  password:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    const logindata = new LoginData(this.nic,this.password);
    this.authService.auth(logindata).subscribe(res=>{
      console.log(res);
      if(res.token){
        localStorage.setItem('lctoken',res.token);
      }else{
        alert('Invalid credentials');
      }
    });
  }

}
