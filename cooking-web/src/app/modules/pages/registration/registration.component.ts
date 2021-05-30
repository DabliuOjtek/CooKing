import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/security/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isSignUpValid: boolean;
  passwordsMatch: boolean;
  passwordValidator = null;
  barLabel = 'Password strength:';

  username = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);
  confirmPassword = new FormControl('', [Validators.required]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.deleteUser !== undefined && params.deleteUser === 'true') {
        const infoMessage = 'User has been deleted!';
        this.openSnackBar(infoMessage);
      }
    });
  }

  onSubmit() {
    this.isSignUpValid = true;
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    this.passwordsMatch = this.checkIfPasswordsMatch(passwordValue, confirmPassword);

    if (this.passwordsMatch) {
      this.registerUser(usernameValue, passwordValue);
    } else {
      this.isSignUpValid = false;
    }
  }

  private registerUser(username: string, password: string) {
    this.authService.signup({ username: username, password: password }).subscribe(
      (response) => {
        this.navigateToLoginPage();
      },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  }

  private navigateToLoginPage(): void {
    this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
  }

  private checkIfPasswordsMatch(password: string, confirmPassword: string): boolean {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['custom-snackbar'],
    });
  }
}
