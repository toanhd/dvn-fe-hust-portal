import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {JwtHelperService} from '@auth0/angular-jwt';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    url = 'http://localhost:3000/';
    private userID;

    constructor(
        private http: Http
    ) {
    }


    logIn(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.url + 'authentication/login', body, {headers: headers})
            .map((response: Response) => {
                this.userID = response.json().userid;
                return {
                    response: response.json(),
                    code: response.status
                }
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public isAuthenticated(): boolean {
        const jwtHelper: JwtHelperService = new JwtHelperService();
        const token = localStorage.getItem('token');
        return !jwtHelper.isTokenExpired(token);
    }

    public getUserID() {
        return this.userID;
    }

    getLecByID(id) {
        const headers = new Headers({'Content-Type': 'application/json', 'x-api-key': 'toanhd'});
        return this.http.get('http://137.116.146.224:3000/api/Lecturer/' + id, {headers: headers})
            .pipe(map((response: Response) => response.json())
                , catchError(
                    (error: Response) => Observable.throwError(error.json())
                )
            )
    }
}
