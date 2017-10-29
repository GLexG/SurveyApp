/**
 * Created by Leon on 8/29/2017.
 */
import { Component, trigger,transition,style,animate,group,state } from '@angular/core';
import {AllsurveysService} from "./allsurveys.service";
import {Http} from "@angular/http";




@Component({
    moduleId: module.id,
    selector: 'allsurveys-cmp',
    templateUrl: 'allsurveys.component.html',
    //PROVIDER!!!!!!!!!!!!!!!!!!!!!!!!!!!
    providers: [AllsurveysService],
    //PROVIDER!!!!!!!!!!!!!!!!!!!!!!!!!!!
    animations: [
        trigger('cardicons', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out')
            ])
        ])
    ]
})

export class AllsurveysComponent{
    getData: string;
    postData: string;

    data;

    // constructor(private _httpService: AllsurveysService){
    //     this._httpService.getSurveys()
    //         .subscribe(data => this.getData = JSON.stringify(data),
    //             error => alert(error),
    //             //kada je request zavrsen ovo radimo
    //             () => console.log("Zavrseno!"));
    //
    // }

    constructor(private http:Http) {
        this.http.get('http://localhost:8080/api/surveys')
            .subscribe(res => this.data = res.json());
    }

    // constructor(private http:Http) {
    //     this.http.get('http://localhost:8080/api/surveys')
    //         .subscribe(data => this.getData = JSON.stringify(data),);
    // }

    // onTestGet(){
    //     this._httpService.getCurrentTime()
    //         .subscribe(
    //             data => this.getData = JSON.stringify(data),
    //             error => alert(error),
    //             //kada je request zavrsen ovo radimo
    //             () => console.log("Zavrseno!")
    //         );
    // }
    //
    // onTestPost(){
    //     this._httpService.postJSON()
    //         .subscribe(
    //             data => this.postData = JSON.stringify(data),
    //             error => alert(error),
    //             //kada je request zavrsen ovo radimo
    //             () => console.log("Zavrseno!")
    //         );
    // }
}
