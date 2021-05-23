import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isLoginValid: boolean;

  constructor(private authService: AuthService, private router: Router, private errorHandler: ErrorHandlerService) {}

  username = new FormControl('', [Validators.required, Validators.minLength(6)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  ngOnInit() {}

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

  private navigateToMainPage(): void {
    this.router.navigate(['/']);
  }
}
