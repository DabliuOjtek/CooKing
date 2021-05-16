import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginMessage: String;
  showErrorMessage: Boolean;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // alert(JSON.stringify(this.form.value))
  }

  get username() {
    return this.form.get('username');
  }

  doLogin() {
    this.showErrorMessage = false;
    this.authService.loginUserRequest(this.form.value).subscribe(
      (response) => {
        if (response) {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
        }
      },
      (error) => {
        this.showErrorMessage = this.errorHandler.handleError(error, true);
      }
    );
  }
}
