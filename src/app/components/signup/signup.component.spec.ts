import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

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
      declarations: [SignupComponent],
      providers: [UserService, {provide: Router, useClass: MockRouter},JwtHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
