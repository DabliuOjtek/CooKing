import { ErrorHandlerService } from './../../../core/services/error-handler.service';
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
import { Component, OnInit, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: QuestionnaireVIEW[];
  questions: QuestionnaireQuestionVIEW[];
  questionArrIndex = 0;
  lengthOfQuestions;

  private filterQuestionnaire = new FilterQuestionnaireVIEW();
  private matChipList: QueryList<MatChip>;
  private chipLists = [];

  constructor(
    private questionnaireService: QuestionnaireService,
    private recipeService: RecipeService,
    private router: Router,
    private dialog: MatDialog,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
  }

  getChipList(index: number) {
    return this.chipLists[index];
  }

  onSetAnswer(matChipList, chip: MatChip) {
    chip.toggleSelected();
    this.matChipList = matChipList;
    this.setPariticularAnswer(chip.value);
  }

  onPreviousQuestion(stepper: MatStepper) {
    this.questionArrIndex--;
    this.setChipList(this.matChipList);
    this.matChipList = this.getChipList(this.questionArrIndex);
    stepper.previous();
  }

  onNextQuestion(stepper: MatStepper) {
    if (this.isSelected()) {
      this.setChipList(this.matChipList);
      this.questionArrIndex++;
      this.matChipList = this.getChipList(this.questionArrIndex);
      stepper.next();
    } else {
      this.dialog.open(QuestionnaireDialogComponent);
    }
  }

  onSubmitQuestionnaire() {
    if (this.isSelected()) {
      this.recipeService.setFilter(this.filterQuestionnaire);
      this.router.navigate(['/recipe']);
    } else {
      this.dialog.open(QuestionnaireDialogComponent);
    }
  }

  private getQuestionnaire() {
    this.questionnaireService.getQuestionnaire().subscribe(
      (response: any) => {
        this.questionnaire = response;
        if (response) {
          this.questionnaire.sort((a, b) => QuestionnaireTypes[a.type] - QuestionnaireTypes[b.type]);
        }
      },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  }

  private getQuestions() {
    this.questionnaireService.getQuestions().subscribe(
      (response: any) => {
        this.questions = response;
        if (response) {
          this.questions.sort((a, b) => QuestionnaireQuestionTypes[a.type] - QuestionnaireQuestionTypes[b.type]);
        }
      },
      (error) => {
        console.log('test');
        this.errorHandler.handleError(error);
      },
      () => {
        this.lengthOfQuestions = Object.keys(this.questions).length;
      }
    );
  }

  private setPariticularAnswer(answerValue: string) {
    if (this.questionArrIndex === 0) {
      this.filterQuestionnaire.mealTypeValue = answerValue;
    } else if (this.questionArrIndex === 1) {
      this.filterQuestionnaire.cuisineTypeValue = answerValue;
    } else if (this.questionArrIndex === 2) {
      this.filterQuestionnaire.preparationTimeValue = answerValue;
    } else if (this.questionArrIndex === 3) {
      this.filterQuestionnaire.levelOfCookingSkillValue = answerValue;
    }
  }

  private setChipList(chipList) {
    let isExists = false;
    this.chipLists.forEach((item) => {
      if (item === chipList) {
        isExists = true;
      }
    });
    if (isExists === false && chipList !== undefined) {
      this.chipLists.push(chipList);
    }
  }

  private isSelected(): boolean {
    let result = false;
    if (this.matChipList === undefined) {
      return result;
    }
    this.matChipList.toArray().forEach((item) => {
      if (item.selected) {
        result = true;
      }
    });
    return result;
  }
}
