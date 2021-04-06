import { QuestionnaireQuestionVIEW } from './../models/questionnaire-question-view';
import { QuestionnaireVIEW } from 'src/app/core/models/questionnaire-view';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  baseUrl = environment.baseUrl;
  readonly iconsUrl = 'https://cookingstorage.blob.core.windows.net/images/';

  constructor(private http: HttpClient) { }

  getQuestionnaire(): Observable<QuestionnaireVIEW> {
    return this.http.get<QuestionnaireVIEW>(this.baseUrl + 'questionnaire');
  }

  getQuestions(): Observable<QuestionnaireQuestionVIEW> {
    return this.http.get<QuestionnaireQuestionVIEW>(this.baseUrl + 'questions');
  }

}
