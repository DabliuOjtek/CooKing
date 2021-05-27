import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/security/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
  isSignUpValid: boolean;
  passwordsMatch: boolean;
  passwordValidator = null;
  barLabel = 'Password strength:';
  isChangeValid: boolean;

  oldPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
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
    const oldPasswordValue = this.oldPassword.value;
    const passwordValue = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    this.passwordsMatch = this.checkIfPasswordsMatch(
      passwordValue,
      confirmPassword
    );

    if (this.passwordsMatch) {
      this.changeUserPassword(oldPasswordValue, passwordValue);
    } else {
      this.isSignUpValid = false;
    }
  }

  private changeUserPassword(oldPassword: string, newPassword: string) {
    this.authService
      .changePassword({ oldPassword: oldPassword, newPassword: newPassword })
      .subscribe(
        (response) => {
          this.navigateToLoginPage();
        },
        (error) => {
          this.isChangeValid = false;
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
