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
const http_1 = require("@angular/http");
const http_2 = require('@angular/http');
require('rxjs/add/operator/map');
let AllsurveysService = class AllsurveysService {
    constructor(_http) {
        this._http = _http;
        this.mojURL = 'http://localhost:8080/api/users';
    }
    getCurrentTime() {
        return this._http.get(this.mojURL)
            .map(res => res.json());
    }
    getSurveys() {
        return this._http.get(this.mojURL)
            .map(res => res.json());
    }
    postJSON() {
        var json = JSON.stringify({ var1: 'test', var2: 3 });
        var params = 'json=' + json;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-ww-form-urlencoded');
        return this._http.post('http://validate.jsontest.com', params, {
            headers: headers
        })
            .map(res => res.json());
    }
};
AllsurveysService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], AllsurveysService);
exports.AllsurveysService = AllsurveysService;
//# sourceMappingURL=allsurveys.service.js.map