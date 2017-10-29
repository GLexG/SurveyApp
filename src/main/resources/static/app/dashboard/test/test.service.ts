

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService{
    constructor(private _http: Http){}


    private mojURL = 'http://localhost:8080/api/users';

    getCurrentTime(){
        return this._http.get(this.mojURL)
            .map(res => res.json());
    }

    postJSON(){
        var json = JSON.stringify({var1: 'test', var2: 3});
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-ww-form-urlencoded');


        return this._http.post('http://validate.jsontest.com',
            params,{
                headers: headers
            })
            .map(res => res.json());
    }


}
