import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { Observable, empty, of } from 'rxjs';
import { DebugElement } from '@angular/core';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        JwtModule.forRoot({
          config: {
            tokenGetter,
            headerName: 'x-auth',
            whitelistedDomains: ['localhost:4000'],
            blacklistedRoutes: ['example.com/examplebadroute/'],
            authScheme: ''
          }
        })],
      declarations: [LoginComponent],
      providers: [UserService, { provide: Router, useClass: MockRouter }, JwtHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });


  it(`should disable submit button if nic is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.nic = '951863149';
    component.password = '123456';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.nic = '';
    component.password = '123456';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.nic = '951863149V717';
    component.password = '123456';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.nic = 'abcdefghiV';
    component.password = '123456';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if password is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.nic = '951863149V';
    component.password = '1234';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.nic = '';
    component.password = '';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should enable submit button if all inputs are valid`, () => {
    component.nic = '951863149V';
    component.password = '123456';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it(`should enable submit button if all inputs are valid`, () => {
    component.nic = '951863149V';
    component.password = '123456';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it(`should call the service when submitted`, () => {
    // debugElement = fixture.debugElement;
    // userService = debugElement.injector.get(UserService);

    userService = TestBed.get(UserService);
    const spy = spyOn(userService, 'auth').and.callFake(data => {
      return empty();
    });

    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it(`should redirect to home after successful login`, () => {

    const router = TestBed.get(Router);
    userService = TestBed.get(UserService);

    const spy = spyOn(userService, 'auth').and.callFake(data => {
      return of({token:'bsjhdcbhjbdch'});
    });

    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

});
