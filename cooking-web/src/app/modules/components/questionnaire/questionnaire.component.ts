import { QuestionnaireQuestionTypes } from './../../../core/models/questionnaire-question-types.enum';
import { QuestionnaireTypes } from './../../../core/models/questionnaire-types.enum';
import { QuestionnaireQuestionVIEW } from './../../../core/models/questionnaire-question-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { FilterQuestionnaireVIEW } from './../../../core/models/filter-questionnaire-view';
import { QuestionnaireVIEW } from './../../../core/models/questionnaire-view';
import { QuestionnaireService } from '../../../core/services/questionnaire.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatStepper } from '@angular/material/stepper';
import { element } from 'protractor';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  filterQuestionnaire = new FilterQuestionnaireVIEW();
  questionnaire: QuestionnaireVIEW[];
  questions: QuestionnaireQuestionVIEW[];
  questionArrIndex = 0;
  lengthOfQuestions;

  constructor(private questionnaireService: QuestionnaireService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
  }

  getQuestionnaire() {
    this.questionnaireService.getQuestionnaire().subscribe((response: any) => {
      this.questionnaire = response;
      if (response) {
        this.questionnaire.sort((a, b) => QuestionnaireTypes[a.type] - QuestionnaireTypes[b.type]);
      }
    }, err => console.log('HTTP Error', err.error),
      () => console.log('HTTP Questionnaire request completed.')
    );
  }

  getQuestions() {
    this.questionnaireService.getQuestions().subscribe((response: any) => {
      this.questions = response;
      if (response) {
        this.questions.sort((a, b) => QuestionnaireQuestionTypes[a.type] - QuestionnaireQuestionTypes[b.type]);
      }
    }, err => console.log('HTTP Error', err.error),
      () => {
        console.log('HTTP Questions request completed.')
        this.lengthOfQuestions = Object.keys(this.questions).length;
      }
    );
  }

  onPreviousQuestion(stepper: MatStepper) {
    this.questionArrIndex--;
    stepper.previous();
  }

  onNextQuestion(stepper: MatStepper) {
    this.questionArrIndex++;
    stepper.next();
  }

  onGetShortRecipes() {
    this.recipeService.getShortRecipes(this.filterQuestionnaire);
    console.log(this.filterQuestionnaire);
  }

  onGetSelectedChip(chip: MatChip) {
    chip.toggleSelected();

    if (this.questionArrIndex === 0) {
      this.filterQuestionnaire.mealTypeValue = chip.value;
    }
    else if (this.questionArrIndex === 1) {
      this.filterQuestionnaire.cuisineTypeValue = chip.value;
    }
    else if (this.questionArrIndex === 2) {
      this.filterQuestionnaire.preparationTimeValue = chip.value;
    }
    else if (this.questionArrIndex === 3) {
      this.filterQuestionnaire.levelOfCookingSkillValue = chip.value;
    }

  }

}
