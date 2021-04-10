import { FilterQuestionnaireVIEW } from './../models/filter-questionnaire-view';
import { ShortRecipeVIEW } from './../models/short-recipe-view';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeVIEW } from '../models/recipe-view';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl = environment.baseUrl;
  filter: FilterQuestionnaireVIEW;
  id = 1;

  constructor(private http: HttpClient) {}

  setFilter(filter: FilterQuestionnaireVIEW) {
    this.filter = filter;
  }

  getShortRecipes(): Observable<ShortRecipeVIEW> {
    return this.http.post<ShortRecipeVIEW>(
      this.baseUrl + 'recipe',
      this.filter
    );
  }

  getRecipe(): Observable<RecipeVIEW> {
    return this.http.get<RecipeVIEW>(this.baseUrl + 'recipe/' + this.id);
  }
}
