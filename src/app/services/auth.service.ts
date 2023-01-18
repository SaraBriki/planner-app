import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

export interface TokenPayload {
  username: string;
}

const baseUrl = environment.baseUrl;
const loginUrl = environment.baseUrl + '/auth/login';
const signupUrl = environment.baseUrl + '/users';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      const tokenPayload: TokenPayload = decode(token);
      return tokenPayload.username;
    } else {
      return null;
    }
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token == null) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(loginpayload: User): Observable<any> {
    return this.http.post(loginUrl, loginpayload);
  }

  signup(signupPayload: User): Observable<any> {
    return this.http.post(signupUrl, signupPayload);
  }
}
