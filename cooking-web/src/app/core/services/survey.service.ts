import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getQuestionnaire() {
    return this.http.get(this.baseUrl + 'questionnaire');
  }

}
