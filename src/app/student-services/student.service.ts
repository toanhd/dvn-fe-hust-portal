import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {catchError, map, filter, switchMap} from 'rxjs/operators';
// import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs'
// import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    url = 'http://13.76.224.67:3000/';

    constructor(
        private http: Http
    ) {
    }

    create(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json', 'x-api-key': 'toanhd'});
        return this.http.post(this.url + 'create', body, {headers: headers})
            .pipe(map((response: Response) => {
                    return {
                        response: response.json(),
                        code: response.status
                    }
                }), catchError((error: Response) => Observable.throw(error.json()))
            )
    }

    getAll() {
        const headers = new Headers({'Content-Type': 'application/json', 'x-api-key': 'toanhd'});
        return this.http.get(this.url + 'api/Student', {headers: headers})
            .pipe(map((response: Response) => response.json())
                , catchError((error: Response) => Observable.throw(error.json())))
    }


    getbyID(id) {
        const headers = new Headers({'Content-Type': 'application/json', 'x-api-key': 'toanhd'});
        return this.http.get(this.url + 'api/Student/' + id, {headers: headers})
            .pipe(map((response: Response) => response.json())
                , catchError((error: Response) => Observable.throwError(error.json())))
    }

    delete(inputUsers) {
        const usersID = [];
        inputUsers.forEach(function (user) {
            usersID.push(user._id)
        });
        const headers = new Headers({'Content-Type': 'application/json', 'x-api-key': 'toanhd'});
        let options = new RequestOptions({headers: headers, body: usersID});
        return this.http.delete(this.url + 'delete', options)
            .pipe(catchError((error: Response) => Observable.throw(error.json())))
    }

    update(userID, cell, cellValue) {
        const body = JSON.stringify({
            userId: userID,
            cell: cell,
            cellValue: cellValue
        });
        const headers = new Headers({'Content-Type': 'application/json', 'x-api-key': 'toanhd'});
        return this.http.patch(this.url + 'update', body, {headers: headers})
            .pipe(map((response: Response) => {
                    return {
                        response: response.json()
                    }
                }), catchError((error: Response) => Observable.throw(error.json()))
            )
    }
}
