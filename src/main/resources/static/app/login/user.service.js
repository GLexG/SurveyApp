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
require('rxjs/add/operator/map');
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        //needs to point to the server
        this._url = "apidata/employeedata.json";
    }
    getEmployees() {
        //response leva strana <=input i Response desna strana <=output tj JSON
        return this._http.get(this._url)
            .map((response) => response.json());
        // return [
        //     {"id":1, "firstname":"vojin"}
        // ]
    }
    //====================================================================================================
    // getAll() {
    //     return this._http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    // }
    getAll() {
        return this._http.get('/api/users')
            .map(response => response.json())
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { console.log("the subscription is completed"); });
    }
    getById(id) {
        return this._http.get('/api/users/' + id)
            .map((response) => response.json())
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { console.log("the subscription is completed"); });
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map