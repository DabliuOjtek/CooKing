import { DeleteUserDialogComponent } from './modules/components/delete-user-dialog/delete-user-dialog.component';
import { SliderItemDirective } from './modules/components/slider/slider-item.directive';
import { QuestionnaireDialogComponent } from './modules/components/questionnaire-dialog/questionnaire-dialog.component';
import { QuestionnaireComponent } from './modules/components/questionnaire/questionnaire.component';
import { SliderComponent } from './modules/components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookingModule } from './modules/cooking.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './modules/components/side-nav/side-nav.component';
import { RegistrationComponent } from './modules/pages/registration/registration.component';
import { PasswordStrengthBarComponent } from './modules/components/password-strength-bar/password-strength-bar.component';
import { TokenInterceptor } from './core/security/token.interceptor';
import { PasswordChangeComponent } from './modules/pages/password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionnaireComponent,
    SliderComponent,
    SliderItemDirective,
    QuestionnaireDialogComponent,
    SideNavComponent,
    RegistrationComponent,
    PasswordStrengthBarComponent,
    PasswordChangeComponent,
    DeleteUserDialogComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
