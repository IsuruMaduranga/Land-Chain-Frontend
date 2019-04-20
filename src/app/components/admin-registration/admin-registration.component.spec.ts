import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrationComponent } from './admin-registration.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import {  empty } from 'rxjs';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

describe('AdminRegistrationComponent', () => {
  let component: AdminRegistrationComponent;
  let fixture: ComponentFixture<AdminRegistrationComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,JwtModule.forRoot({
        config: {
          tokenGetter,
          headerName: 'x-auth',
          whitelistedDomains: ['localhost:4000'],
          blacklistedRoutes: ['example.com/examplebadroute/'],
          authScheme: ''
        }
      })],
      declarations: [AdminRegistrationComponent],
      providers: [UserService, {provide: Router, useClass: MockRouter},JwtHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it(`should disable submit button if first name is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.firstName = "knd55555";
    component.lastName = "fnjknb";
    component.nic = "951863149V";
    component.email = "a@b.com";
    component.password = "123456";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should disable submit button if last name is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.firstName = "knd";
    component.lastName = "fnjknb5y897467";
    component.nic = "951863149V";
    component.email = "a@b.com";
    component.password = "123456";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should disable submit button if nic is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.firstName = "knd55555";
    component.lastName = "fnjknb";
    component.nic = "9518631";
    component.email = "a@b.com";
    component.password = "123456";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should disable submit button if email is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.firstName = "kndrr";
    component.lastName = "fnjknb";
    component.nic = "951863149V";
    component.email = "ab.comkkk";
    component.password = "123456";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should disable submit button if password is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.firstName = "knd";
    component.lastName = "fnjknb";
    component.nic = "951863149V";
    component.email = "a@b.com";
    component.password = "12";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should enable submit button if all inputs are valid`, () => {
    component.firstName = "knd";
    component.lastName = "fnjknb";
    component.nic = "951863149V";
    component.email = "a@b.com";
    component.password = "123456";
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it(`should call the service when submitted`, () => {
    userService = TestBed.get(UserService);
    const spy = spyOn(userService, 'auth').and.callFake(data => {
      return empty();
    });

  });

});
