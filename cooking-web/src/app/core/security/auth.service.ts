import { ErrorHandlerService } from './../services/error-handler.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenView } from '../models/token-view';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private LS_TOKEN = 'JWT_TOKEN';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  login(credentials): Observable<any> {
    return this.http
      .post<TokenView>(this.baseUrl + 'login', credentials)
      .pipe(tap((token) => localStorage.setItem(this.LS_TOKEN, token.token)));
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + 'logout', null).pipe(tap(() => localStorage.removeItem(this.LS_TOKEN)));
  }

  signup(credentials): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', credentials);
  }

  changePassword(changePasswordData): Observable<any> {
    return this.http
      .put(this.baseUrl + 'changePassword', changePasswordData)
      .pipe(tap(() => localStorage.removeItem(this.LS_TOKEN)));
  }

  deleteUser(): Observable<any> {
    return this.http.delete(this.baseUrl + 'deleteUser').pipe(tap(() => localStorage.removeItem(this.LS_TOKEN)));
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.LS_TOKEN);
  }

  getToken(): string {
    return localStorage.getItem(this.LS_TOKEN);
  }
}
