"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const date_validator_1 = require('./validators/date.validator');
let NewsurveyComponent = class NewsurveyComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.trustForm = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            //ne radi mi bas ovaj validator datuma
            from: ['', date_validator_1.DateValidator.regularDate],
            to: ['', date_validator_1.DateValidator.regularDate],
            required: ['false'],
            questions: this.fb.array([])
        });
        this.addQuestion();
    }
    initQuestion() {
        return this.fb.group({
            qname: ['', forms_1.Validators.required],
            qtype: [''],
            postcode: [''],
            name: '',
            numberOfAnswerInputs: 0,
            answers: this.fb.array([])
        });
    }
    addQuestion() {
        const questionArray = this.trustForm.controls['questions'];
        const newQuestion = this.initQuestion();
        questionArray.push(newQuestion);
    }
    removeQuestion(idx) {
        const questionArray = this.trustForm.controls['questions'];
        questionArray.removeAt(idx);
    }
    //ne radi ovo...to bi trebalo da se pogleda...kada se menja tip pitanja da se resetuje forma cela!!!
    ngOnChanges(changes) {
        if (changes.qtype) {
            this.trustForm.reset();
        }
    }
    logCheckbox(element) {
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
};
NewsurveyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newsurvey-app',
        // template: "lalalalla"
        templateUrl: `./newsurvey.component.html`
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], NewsurveyComponent);
exports.NewsurveyComponent = NewsurveyComponent;
//# sourceMappingURL=newsurvey.component.js.map