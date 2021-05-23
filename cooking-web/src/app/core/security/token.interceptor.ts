import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../services/error-handler.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private errorHandler: ErrorHandlerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isLogged()) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + this.authService.getToken() },
      });
    }
    return next.handle(request).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error);
        return throwError(error);
      })
    );
  }
}
