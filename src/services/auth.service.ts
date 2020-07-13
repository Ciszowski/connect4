import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const optionRequete = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        "Content-type": 'application/json'
    })
};
@Injectable({
    providedIn: "root"
})
export class AuthServices {
    constructor(private http: HttpClient) { }
s
    subscribe(user: Object): void {
        // this.http.post('/api/auth/subscribe', user, optionRequete)
        //     .subscribe(res => console.log("réponse " + res))    
    }

    login() { }

    disconnect() { }

}
