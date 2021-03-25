import { SliderComponent } from './modules/components/slider/slider.component';
import { SurveyComponent } from './modules/components/survey/survey.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookingModule } from './modules/cooking.module';
import { SliderItemDirective } from './modules/components/slider/slider-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SurveyComponent,
    SliderComponent,
    SliderItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
