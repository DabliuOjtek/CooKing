import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private router: Router) {}

  public handleError(error: HttpErrorResponse, isLoginPage?: boolean) {
    if (error.status === 401 && isLoginPage === true) {
      return this.handleErrorsForLogin(error);
    } else if (error.status === 404) {
      this.handleError404(error);
    }
  }

  private handleError404(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/page-not-found']);
  }

  private createErrorMessage(error: HttpErrorResponse) {
    console.log(error.message);
  }

  private handleErrorsForLogin(error: HttpErrorResponse): boolean {
    this.createErrorMessage(error);
    return true;
  }
}
