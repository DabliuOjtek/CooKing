import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private router: Router) {}

  public handleError(error: HttpErrorResponse) {
    this.handleErrors(error);
  }

  private handleErrors(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/page-not-found']);
  }

  private createErrorMessage(error: HttpErrorResponse) {
    console.log(error.message);
  }
}
