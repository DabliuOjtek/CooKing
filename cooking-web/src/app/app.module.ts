import { QuestionnaireComponent } from './modules/components/questionnaire/questionnaire.component';
import { MainComponent } from './modules/pages/main/main.component';
import { SliderComponent } from './modules/components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookingModule } from './modules/cooking.module';
import { RecipeComponent } from './modules/pages/recipe/recipe.component';
import { SliderItemDirective } from './modules/components/slider/slider-item.directive';
import { TileComponent } from './modules/pages/tile/tile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionnaireComponent,
    RecipeComponent,
    SliderComponent,
    SliderItemDirective,
    MainComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
