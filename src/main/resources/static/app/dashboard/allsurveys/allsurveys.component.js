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
/**
 * Created by Leon on 8/29/2017.
 */
const core_1 = require('@angular/core');
const allsurveys_service_1 = require("./allsurveys.service");
const http_1 = require("@angular/http");
let AllsurveysComponent = class AllsurveysComponent {
    // constructor(private _httpService: AllsurveysService){
    //     this._httpService.getSurveys()
    //         .subscribe(data => this.getData = JSON.stringify(data),
    //             error => alert(error),
    //             //kada je request zavrsen ovo radimo
    //             () => console.log("Zavrseno!"));
    //
    // }
    constructor(http) {
        this.http = http;
        this.http.get('http://localhost:8080/api/surveys')
            .subscribe(res => this.data = res.json());
    }
};
AllsurveysComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'allsurveys-cmp',
        templateUrl: 'allsurveys.component.html',
        //PROVIDER!!!!!!!!!!!!!!!!!!!!!!!!!!!
        providers: [allsurveys_service_1.AllsurveysService],
        //PROVIDER!!!!!!!!!!!!!!!!!!!!!!!!!!!
        animations: [
            core_1.trigger('cardicons', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1 })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0s ease-out')
                ])
            ])
        ]
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], AllsurveysComponent);
exports.AllsurveysComponent = AllsurveysComponent;
//# sourceMappingURL=allsurveys.component.js.map