import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AutenticacionService {
    constructor(private http: Http) { }

    login(username: string, password: string) {        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8181/IDIGERRegistroAfectados/webresources/autenticacion/usuario', JSON.stringify({ usuario: username, clave: password }), options)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response           
            let user = response.json();
            if (user && user.token) {                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }  
}