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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const common_1 = require('@angular/common');
const test2_component_1 = require('./test2.component');
const adress_component_1 = require('./adress.component');
let Test2Module = class Test2Module {
};
Test2Module = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, common_1.CommonModule],
        declarations: [test2_component_1.Test2Component, adress_component_1.AddressComponent],
        bootstrap: [test2_component_1.Test2Component]
    }), 
    __metadata('design:paramtypes', [])
], Test2Module);
exports.Test2Module = Test2Module;
//# sourceMappingURL=test2.module.js.map