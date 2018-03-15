import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService { 	
 	private headers: HttpHeaders;

    constructor(private http: HttpClient) {

    }
 
    // Uses http.get() to load data from a single API endpoint
    getLogin(email: string, password: string) {
    	const httpOptions = {
    	  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' })
    	};

    	//let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded', 'Allow-Control-Allow-Origin':'*'});

    	//this.headers = new RequestOptions({headers: headers});

    	console.log(httpOptions);

        return this.http.post('http://laravel-api.local/api/auth/login', {'email': email, 'password': password}, httpOptions);
    }
}