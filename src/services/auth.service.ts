import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
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
    constructor(private http: HttpClient, private router: Router) { }

    subscribe(user: Object): void {
        // this.http.post('/api/auth/subscrib', user, optionRequete)
        //     .subscribe(res => console.log(e"réponse " + res))    
    }

    login(user: Object) { 
        console.log(user)
        this.http.post("http://localhost:8080/user/login", user, optionRequete)
        .subscribe(isvalid => {
            if(isvalid)
            {
                sessionStorage.setItem('token',btoa(user.toString()))
                this.router.navigate(["Acceuil","Game"])
            }else{
                console.log("Erreur d'authentification!")
            }
        })  
    }

    disconnect() { }

}
