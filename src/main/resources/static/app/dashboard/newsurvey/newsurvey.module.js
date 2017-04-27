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
const newsurvey_component_1 = require('./newsurvey.component');
const contract_component_1 = require('./contract.component');
const email_component_1 = require('./email.component');
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const ltext_component_1 = require("./answertype/ltext.component");
const number_component_1 = require("./answertype/number.component");
const checkbox_component_1 = require("./answertype/checkbox.component");
const stext_component_1 = require("./answertype/stext.component");
const radio_component_1 = require("./answertype/radio.component");
const date_component_1 = require("./answertype/date.component");
let NewsurveyModule = class NewsurveyModule {
};
NewsurveyModule = __decorate([
    core_1.NgModule({
        imports: [
            // BrowserModule,
            router_1.RouterModule,
            common_1.CommonModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            newsurvey_component_1.NewsurveyComponent,
            contract_component_1.ContractComponent,
            email_component_1.EmailComponent,
            ltext_component_1.LtextComponent,
            stext_component_1.StextComponent,
            number_component_1.NumberComponent,
            checkbox_component_1.CheckboxComponent,
            radio_component_1.RadioComponent,
            date_component_1.DateComponent
        ],
        bootstrap: [newsurvey_component_1.NewsurveyComponent]
    }), 
    __metadata('design:paramtypes', [])
], NewsurveyModule);
exports.NewsurveyModule = NewsurveyModule;
//# sourceMappingURL=newsurvey.module.js.map