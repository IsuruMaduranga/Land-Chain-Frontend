import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public userService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{

    const expectedRole = next.data.expectedRole;

    if(!expectedRole.includes(this.userService.user)){
      alert('Access not allowed! Login with suitable credentials!');
      console.log(this.userService.user);
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  
  }
  
}
