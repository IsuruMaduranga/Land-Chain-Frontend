import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,
        JwtModule.forRoot({
          config: {
            tokenGetter,
            headerName: 'x-auth',
            whitelistedDomains: ['localhost:4000'],
            blacklistedRoutes: ['example.com/examplebadroute/'],
            authScheme: ''
          }
        })],
      providers: [AuthGuard,{provide: Router, useClass: MockRouter},JwtHelperService]
    });
  });

  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

});
