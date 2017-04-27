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
let NumberComponent = class NumberComponent {
    constructor(fb) {
        this.fb = fb;
        this.counter = 0;
    }
    addAnswer2() {
        const answerArray = this.contractGroup.controls['answers'];
        const newAnswer = this.initAnswer();
        // this.counter = this.contractGroup.controls.answers.controls.length + 1;
        this.counter++;
        // this.contractGroup.controls['numberOfAnswerInputs'] = this.counter;
        // this.contractGroup.controls['answers',this.contractGroup.controls.answers.controls.length , 'numberOfInputs'];
        // this.contractGroup.get(['answers', i, 'qtype']).value
        answerArray.push(newAnswer);
    }
    removeAnswer(idx) {
        const answerArray = this.contractGroup.controls['answers'];
        answerArray.removeAt(idx);
        //broj answera
        this.counter--;
    }
    initAnswer() {
        return this.fb.group({
            // pravi jebeni problem ovo disabled...i zato nije hteo da mi ispise niz adresa u proslom slucaju!!!
            // text: [{value:'empty',disabled:true}],
            number: ''
        });
    }
};
__decorate([
    core_1.Input('group'), 
    __metadata('design:type', forms_1.FormGroup)
], NumberComponent.prototype, "contractGroup", void 0);
NumberComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'number-cmp',
        templateUrl: './number.component.html',
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], NumberComponent);
exports.NumberComponent = NumberComponent;
//# sourceMappingURL=number.component.js.map