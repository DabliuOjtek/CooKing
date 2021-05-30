import { error } from 'selenium-webdriver';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isLoginValid: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  username = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.registered !== undefined && params.registered === 'true') {
        const infoMessage = 'Registration successful, please log in!';
        this.openSnackBar(infoMessage);
      } else if (params.changePassword !== undefined && params.changePassword === 'true') {
        const infoMessage = 'Password changed successfully!';
        this.openSnackBar(infoMessage);
      }
    });
  }

  onSubmit() {
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    this.authService.login({ username: usernameValue, password: passwordValue }).subscribe(
      (response) => {
        this.navigateToMainPage();
      },
      (error) => {
        this.isLoginValid = false;
      }
    );
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['custom-snackbar'],
    });
  }

  private navigateToMainPage(): void {
    this.router.navigate(['/']);
  }
}
