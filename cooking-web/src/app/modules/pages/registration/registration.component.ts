import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { MustMatch } from 'src/app/core/_helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public account = {
    password: null,
  };
  public barLabel: string = 'Password strength:';

  registerForm: FormGroup;
  submitted = false;
  showErrorMessage = false;
  showSuccesMesage = false;

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.doRegister();
  }
  doRegister() {
    this.showErrorMessage = false;
    this.showSuccesMesage = false;
    this.authService.signup(this.registerForm.value).subscribe();
  }
}
