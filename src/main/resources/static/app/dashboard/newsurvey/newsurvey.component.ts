import {Component, OnInit, OnChanges } from '@angular/core';

import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import {DateValidator} from './validators/date.validator'

@Component({
  moduleId: module.id,
  selector: 'newsurvey-app',
  // template: "lalalalla"
  templateUrl: `./newsurvey.component.html`
})
export class NewsurveyComponent implements OnInit,OnChanges{
  trustForm: FormGroup;
  i:number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.trustForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        //ne radi mi bas ovaj validator datuma

        from: ['', DateValidator.regularDate],
        to: ['', DateValidator.regularDate],

        required: ['false'],
        questions: this.fb.array([])
    });

    this.addQuestion();
  }
  initQuestion() {
    return this.fb.group({
        qname: ['', Validators.required],
        qtype: [''],
        postcode: [''],
        name: '',
        numberOfAnswerInputs:0,
        answers: this.fb.array([])
    });
  }

  addQuestion() {
    const questionArray = <FormArray>this.trustForm.controls['questions'];
    const newQuestion = this.initQuestion();

    questionArray.push(newQuestion);
  }

  removeQuestion(idx: number) {
    const questionArray = <FormArray>this.trustForm.controls['questions'];
    questionArray.removeAt(idx);
  }

  //ne radi ovo...to bi trebalo da se pogleda...kada se menja tip pitanja da se resetuje forma cela!!!
  ngOnChanges(changes){
        if(changes.qtype){
            this.trustForm.reset();
        }

  }
  public logCheckbox(element: HTMLInputElement): void {
      this.trustForm.controls['required'].setValue(element.checked);

  }

  //treba ovde odraditi da se resetuje kada se prebaci sa jednog na drugi tip
    onChange(newValue) {
        // this.trustForm.controls['questions'].get('answers').reset();

        //clear the array of answers when changing select answer type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        this.trustForm.controls['answers'] = this.fb.array([]);

        // for (var i = 0; i < this.trustForm.answers.controls.length; i++) {
        //
        // }

        // this.pom = this.obj.toString();
        // ... do other stuff here ...
    }


    // save(model: Customer) {
    //     // call API to save
    //     // ...
    //     console.log(model);
    // }
}