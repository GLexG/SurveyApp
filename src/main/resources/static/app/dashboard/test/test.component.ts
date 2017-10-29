/**
 * Created by Leon on 8/29/2017.
 */
import { Component, trigger,transition,style,animate,group,state } from '@angular/core';
import {TestService} from "./test.service";


@Component({
    moduleId: module.id,
    selector: 'test-cmp',
    templateUrl: 'test.component.html',
    //PROVIDER!!!!!!!!!!!!!!!!!!!!!!!!!!!
    providers: [TestService],
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

export class TestComponent{
    getData: string;
    postData: string;

    constructor(private _httpService: TestService){}

    onTestGet(){
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error),
                //kada je request zavrsen ovo radimo
                () => console.log("Zavrseno!")
            );
    }

    onTestPost(){
        this._httpService.postJSON()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                //kada je request zavrsen ovo radimo
                () => console.log("Zavrseno!")
            );
    }
}
