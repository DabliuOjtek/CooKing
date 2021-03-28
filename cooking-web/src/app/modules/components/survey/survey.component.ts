import { Survey } from 'src/app/core/models/survey';
import { SurveyService } from './../../../core/services/survey.service';
import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  survey: Survey;
  completedSurvey: Array<Survey> = [];
  questionArrIndex = 0;
  arrayOfTypes = [];

  questionsArr = [
    { 'question': 'What type of meal do you want to choose?' },
    { 'question': 'What are your favorite cuisines?' },
    { 'question': 'How much time do you have?' },
    { 'question': 'How would you describe your cooking skills?' },
  ];

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getQuestionnaire().subscribe((response: any) => {
      if (response) {
        this.survey = response;
        this.copyTypesFromSurvey();
      }
    });
  }

  previousQuestion(stepper: MatStepper) {
    this.questionArrIndex--;
    stepper.previous();
  }

  nextQuestion(stepper: MatStepper) {
    this.questionArrIndex++;
    stepper.next();
  }

  copyTypesFromSurvey() {
    for (const index in this.survey) {
      if (true) {
        this.completedSurvey.push({
          type: this.survey[index].type,
          values: []
        });
      }
    }
  }

  toggleSelection(chip: MatChip, sur: Survey) {
    chip.toggleSelected();

    this.arrayOfTypes = this.completedSurvey[this.questionArrIndex].values;

    if (chip.selected) {
      this.arrayOfTypes.push(chip.value);
    } else {
      const index: number = this.arrayOfTypes.indexOf(chip.value);
      if (index !== -1) {
        this.completedSurvey[this.questionArrIndex].values.splice(index, 1);
      }
    }

    console.log(this.completedSurvey);
  }
}
