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
let LtextComponent = class LtextComponent {
    constructor(fb) {
        this.fb = fb;
    }
    addAnswerLongText() {
        const answerArray = this.contractGroup.controls['answers'];
        const newAnswer = this.initAnswer();
        answerArray.push(newAnswer);
    }
    removeAnswer(idx) {
        const answerArray = this.contractGroup.controls['answers'];
        answerArray.removeAt(idx);
    }
    initAnswer() {
        return this.fb.group({
            // pravi jebeni problem ovo disabled...i zato nije hteo da mi ispise niz adresa u proslom slucaju!!!
            // text: [{value:'empty',disabled:true}],
            text: ''
        });
    }
};
__decorate([
    core_1.Input('group'), 
    __metadata('design:type', forms_1.FormGroup)
], LtextComponent.prototype, "contractGroup", void 0);
LtextComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ltextara-cmp',
        templateUrl: './ltext.component.html',
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], LtextComponent);
exports.LtextComponent = LtextComponent;
//# sourceMappingURL=ltext.component.js.map