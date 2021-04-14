import { QuestionnaireDialogComponent } from './../questionnaire-dialog/questionnaire-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { QuestionnaireQuestionTypes } from './../../../core/models/questionnaire-question-types.enum';
import { QuestionnaireTypes } from './../../../core/models/questionnaire-types.enum';
import { QuestionnaireQuestionVIEW } from './../../../core/models/questionnaire-question-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { FilterQuestionnaireVIEW } from './../../../core/models/filter-questionnaire-view';
import { QuestionnaireVIEW } from './../../../core/models/questionnaire-view';
import { QuestionnaireService } from '../../../core/services/questionnaire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  private filterQuestionnaire = new FilterQuestionnaireVIEW();
  private checkIfSelected = false;
  questionnaire: QuestionnaireVIEW[];
  questions: QuestionnaireQuestionVIEW[];
  questionArrIndex = 0;
  lengthOfQuestions;

  constructor(
    private questionnaireService: QuestionnaireService,
    private recipeService: RecipeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
  }

  getQuestionnaire() {
    this.questionnaireService.getQuestionnaire().subscribe(
      (response: any) => {
        this.questionnaire = response;
        if (response) {
          this.questionnaire.sort((a, b) => QuestionnaireTypes[a.type] - QuestionnaireTypes[b.type]);
        }
      },
      (err) => console.log('HTTP Error', err.error),
      () => console.log('HTTP Questionnaire request completed.')
    );
  }

  getQuestions() {
    this.questionnaireService.getQuestions().subscribe(
      (response: any) => {
        this.questions = response;
        if (response) {
          this.questions.sort((a, b) => QuestionnaireQuestionTypes[a.type] - QuestionnaireQuestionTypes[b.type]);
        }
      },
      (err) => console.log('HTTP Error', err.error),
      () => {
        console.log('HTTP Questions request completed.');
        this.lengthOfQuestions = Object.keys(this.questions).length;
      }
    );
  }

  onPreviousQuestion(stepper: MatStepper) {
    this.questionArrIndex--;
    stepper.previous();
  }

  onNextQuestion(stepper: MatStepper) {
    if (this.checkIfSelected) {
      this.questionArrIndex++;
      stepper.next();
    } else {
      this.dialog.open(QuestionnaireDialogComponent);
    }
  }

  onSubmitQuestionnaire() {
    this.recipeService.setFilter(this.filterQuestionnaire);
    this.router.navigate(['/recipe']);
  }

  onSetAnswer(chip: MatChip) {
    chip.toggleSelected();
    this.checkIfSelected = chip.selected;

    if (this.questionArrIndex === 0) {
      this.filterQuestionnaire.mealTypeValue = chip.value;
    } else if (this.questionArrIndex === 1) {
      this.filterQuestionnaire.cuisineTypeValue = chip.value;
    } else if (this.questionArrIndex === 2) {
      this.filterQuestionnaire.preparationTimeValue = chip.value;
    } else if (this.questionArrIndex === 3) {
      this.filterQuestionnaire.levelOfCookingSkillValue = chip.value;
    }
  }
}
