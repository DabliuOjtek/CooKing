import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {


  // question1 = ['Typ posiłku', 'Wybór kuchni', 'Czas przygotowania', 'Poziom umiejętności gotowania'];
  // answer1 = ['Amerykańska', 'Włoska', 'Azjatycka', 'Polska', 'Meksykańska'];

  questions = [
    { 'question': 'Typ posiłku', 'answers': ['śniadanie', 'obiad', 'deser', 'kolacja'] },
    { 'question': 'Wybór kuchni', 'answers': ['Amerykańska', 'Włoska', 'Azjatycka', 'Polska', 'Meksykańska'] },
    { 'question': 'Czas przygotowania', 'answers': ['15', '30', '60', 'ponad 60'] },
    { 'question': 'Poziom umiejętności gotowania', 'answers': ['1', '2', '3', '4', '5'] },
  ];

  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  // constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.firstFormGroup = this.formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

}
