import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/security/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Router } from '@angular/router';

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

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(50),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(100),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.isSignUpValid = true;
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    this.passwordsMatch = this.checkIfPasswordsMatch(
      passwordValue,
      confirmPassword
    );

    if (this.passwordsMatch) {
      this.registerUser(usernameValue, passwordValue);
    } else {
      this.isSignUpValid = false;
    }
  }

  private registerUser(username: string, password: string) {
    this.authService
      .signup({ username: username, password: password })
      .subscribe(
        (response) => {
          this.navigateToLoginPage();
        },
        (error) => {
          this.errorHandler.handleError(error);
        }
      );
  }

  private navigateToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  private checkIfPasswordsMatch(
    password: string,
    confirmPassword: string
  ): boolean {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }
}
