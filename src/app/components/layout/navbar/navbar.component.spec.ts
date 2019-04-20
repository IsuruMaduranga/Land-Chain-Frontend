import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
export function tokenGetter() {
  return localStorage.getItem('token');
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule , 
        MDBBootstrapModule.forRoot(),
        JwtModule.forRoot({
          config: {
            tokenGetter,
            headerName: 'x-auth',
            whitelistedDomains: ['localhost:4000'],
            blacklistedRoutes: ['example.com/examplebadroute/'],
            authScheme: ''
          }
        })],
      declarations: [ NavbarComponent ],
      providers: [UserService, {provide: Router, useClass: MockRouter},JwtHelperService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should remove token when logout and redirect to home page', () => {
    const router = TestBed.get(Router);
    localStorage.setItem('token',"enrvjnjfv");
    component.logout();
    expect(localStorage.getItem('token')).toBeNull();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
    localStorage.removeItem('token');
  });

});
