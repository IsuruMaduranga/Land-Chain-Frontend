import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logout().subscribe(res=>{
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    });
  }

}
