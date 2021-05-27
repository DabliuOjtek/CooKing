import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  errorMessage = '';

  constructor(private router: Router) {}

  public handleError(error: HttpErrorResponse) {
    const endpoint = this.getEndpoint(error.url);

    if (error.status === 401 && endpoint === 'login') {
      return this.handleErrorsForLogin(error);
    } else if (error.status === 400) {
      return this.handleError400(error);
    } else if (error.status === 400 && endpoint === 'signup') {
      this.handleErrorForSignUp(error);
    } else if (error.status === 404) {
      this.handleError404(error);
    }
  }

  private handleError400(error: HttpErrorResponse): string {
    this.createErrorMessage(error);
    return this.getErrorMessage(error);
  }

  private handleError404(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/page-not-found']);
  }

  private createErrorMessage(error: HttpErrorResponse) {
    console.log(error.message);
  }

  private handleErrorsForLogin(error: HttpErrorResponse): string {
    this.createErrorMessage(error);
    return this.getErrorMessage(error);
  }

  private handleErrorForSignUp(error: any) {
    this.getErrorMessage(error);
  }

  private getErrorMessage(error: any) {
    error.error.errors.forEach((element) => {
      this.errorMessage += element + ' ';
    });
    return this.errorMessage;
  }

  private getEndpoint(url: string): string {
    const split = url.split('/');
    return split[split.length - 1];
  }
}
