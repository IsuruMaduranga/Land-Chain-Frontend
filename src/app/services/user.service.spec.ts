import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      JwtModule.forRoot({
      config: {
        tokenGetter,
        headerName: 'x-auth',
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['example.com/examplebadroute/'],
        authScheme: ''
      }
    })],
    providers: [JwtHelperService]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
