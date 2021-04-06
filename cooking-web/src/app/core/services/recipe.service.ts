import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterQuestionnaireVIEW } from '../models/filter-questionnaire-view';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getShortRecipes(filterQuestionnaireVIEW: FilterQuestionnaireVIEW): Observable<FilterQuestionnaireVIEW> {
    return this.http.post<FilterQuestionnaireVIEW>(this.baseUrl + 'recipe', filterQuestionnaireVIEW);
  }
}
