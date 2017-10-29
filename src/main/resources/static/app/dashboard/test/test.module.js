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
const core_1 = require("@angular/core");
const test_component_1 = require("./test.component");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
let TestModule = class TestModule {
};
TestModule = __decorate([
    core_1.NgModule({
        imports: [
            // BrowserModule,
            router_1.RouterModule,
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            test_component_1.TestComponent,
        ],
        bootstrap: [test_component_1.TestComponent]
    }), 
    __metadata('design:paramtypes', [])
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=test.module.js.map