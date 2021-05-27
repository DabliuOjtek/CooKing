import {ErrorHandlerService} from '../services/error-handler.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {TokenView} from '../models/token-view';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {SideNavService} from "../services/side-nav.service";
import {AuthLayoutService} from "../services/auth-layout.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private LS_TOKEN = 'JWT_TOKEN';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private sideNavService: SideNavService,
    private authLayout: AuthLayoutService) {
  }

  login(credentials): Observable<any> {
    return this.http.post<TokenView>(this.baseUrl + 'login', credentials).pipe(
      tap((token) => {
        localStorage.setItem(this.LS_TOKEN, token.token);
        this.authLayout.setLogged(true);
      }));
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + 'logout', {}).pipe(
      tap(() => this.removeTokenAndSetLayout()));
  }

  signup(credentials): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', credentials);
  }

  changePassword(changePasswordData): Observable<any> {
    return this.http.put(this.baseUrl + 'changePassword', changePasswordData).pipe(
      tap(() => this.removeTokenAndSetLayout()));
  }

  deleteUser(): Observable<any> {
    return this.http.delete(this.baseUrl + 'deleteUser').pipe(
      tap(() => this.removeTokenAndSetLayout()));
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.LS_TOKEN);
  }

  getToken(): string {
    return localStorage.getItem(this.LS_TOKEN);
  }

  removeTokenAndSetLayout(): void {
    localStorage.removeItem(this.LS_TOKEN);
    this.authLayout.setLogged(false);
  }
}
