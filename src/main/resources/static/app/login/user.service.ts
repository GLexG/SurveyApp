import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

    //needs to point to the server
    private _url: string = "apidata/employeedata.json";
    constructor(private _http: Http){}


    getEmployees(){
        //response leva strana <=input i Response desna strana <=output tj JSON
        return this._http.get(this._url)
            .map((response:Response) => response.json());
        // return [
        //     {"id":1, "firstname":"vojin"}
        // ]
    }

    //====================================================================================================
    // getAll() {
    //     return this._http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    // }

    getAll(){
        return this._http.get('/api/users')
            .map(response => response.json())
            .subscribe(
                function(response) { console.log("Success Response" + response)},
                function(error) { console.log("Error happened" + error)},
                function() { console.log("the subscription is completed")}
            );
    }

    getById(id: number) {
        return this._http.get('/api/users/' + id)
            .map((response: Response) => response.json())
            .subscribe(
                    function(response) { console.log("Success Response" + response)},
                    function(error) { console.log("Error happened" + error)},
                    function() { console.log("the subscription is completed")}
                );
    }


    // create(user: User) {
    //     return this._http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    // }
    //
    // update(user: User) {
    //     return this._http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }
    //
    // delete(id: number) {
    //     return this._http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

}