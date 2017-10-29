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
const allsurveys_component_1 = require("./allsurveys.component");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const column_component_1 = require("./column.component");
const datatable_component_1 = require("./datatable.component");
let AllsurveysModule = class AllsurveysModule {
};
AllsurveysModule = __decorate([
    core_1.NgModule({
        imports: [
            // BrowserModule,
            router_1.RouterModule,
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            allsurveys_component_1.AllsurveysComponent,
            datatable_component_1.DatatableComponent,
            column_component_1.ColumnComponent
        ],
        bootstrap: [allsurveys_component_1.AllsurveysComponent]
    }), 
    __metadata('design:paramtypes', [])
], AllsurveysModule);
exports.AllsurveysModule = AllsurveysModule;
//# sourceMappingURL=allsurveys.module.js.map