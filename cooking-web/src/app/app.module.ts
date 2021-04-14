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
import { SliderItemDirective } from './modules/components/slider/slider-item.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionnaireComponent,
    SliderComponent,
    SliderItemDirective,
    QuestionnaireDialogComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
