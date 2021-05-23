import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  errorMessage = '';

  constructor(private router: Router) {}

  public handleError(error: HttpErrorResponse, isLoginPage?: boolean) {
    if (error.status === 401 && isLoginPage === true) {
      return this.handleErrorsForLogin(error);
    } else if (error.status === 404) {
      this.handleError404(error);
    } else if (error.status == 400) {
      return this.handleError400(error);
    }
  }

  private handleError404(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/page-not-found']);
  }

  private handleError400(error: HttpErrorResponse) {
    error.error.errors.forEach((element) => {
      this.errorMessage += element + '&&';
    });
    return this.errorMessage;
  }

  private createErrorMessage(error: HttpErrorResponse) {
    console.log(error.message);
  }

  private handleErrorsForLogin(error: HttpErrorResponse): boolean {
    this.createErrorMessage(error);
    return true;
  }
}
