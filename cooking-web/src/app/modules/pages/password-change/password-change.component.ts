import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/security/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLayoutService } from '../../../core/services/auth-layout.service';

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

  oldPassword = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);
  confirmPassword = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router, private authLayout: AuthLayoutService) {}

  ngOnInit() {
    this.authLayout.isLogged.subscribe((isLogged) => {
      if (!isLogged && this.router.url === '/password-change') {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.isSignUpValid = true;
    const oldPasswordValue = this.oldPassword.value;
    const passwordValue = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    this.passwordsMatch = this.checkIfPasswordsMatch(passwordValue, confirmPassword);

    if (this.passwordsMatch) {
      this.changeUserPassword(oldPasswordValue, passwordValue);
    } else {
      this.isSignUpValid = false;
    }
  }

  private changeUserPassword(oldPassword: string, newPassword: string) {
    this.authService.changePassword({ oldPassword: oldPassword, newPassword: newPassword }).subscribe(
      (response) => {
        this.router.navigate(['/login'], { queryParams: { changePassword: 'true' } });
      },
      (error) => {
        this.isChangeValid = false;
      }
    );
  }

  private checkIfPasswordsMatch(password: string, confirmPassword: string): boolean {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }
}
