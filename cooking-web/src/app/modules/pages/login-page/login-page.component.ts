import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  showErrorMessage = false;

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.doLogin();
    }
  }
  doLogin() {
    this.showErrorMessage = false;
    this.authService.loginUserRequest(this.loginForm.value).subscribe(
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
