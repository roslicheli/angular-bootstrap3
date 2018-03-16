import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

const apiURL = environment.API_URL;

@Injectable()
export class UserService { 	
 	private headers: HttpHeaders;    

    constructor(private http: HttpClient) {
        console.log(apiURL);
    }
 
    getLogin(email: string, password: string) {
    	const httpOptions = {
    	  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' })
    	};

        return this.http.post(apiURL+'/auth/login', {'email': email, 'password': password}, httpOptions);
    } //end getLogin


} 