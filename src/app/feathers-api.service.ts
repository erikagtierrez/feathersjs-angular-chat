import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FeathersApiService {
  apiUrl='http://localhost:3030';

  constructor(private http: Http) {}

  login(name: string, password:string){
     let headers = new Headers({ 'Content-Type': 'application/json' })
		let user = {
			"email": name,
			"password": password,
		}
		console.log(JSON.stringify(user));
		return this.http.post(this.apiUrl + '/auth/local', JSON.stringify(user), { headers: headers }).map(
			(response: Response) => response.json()
		);
  }

  signup(name: string, password:string){
     let headers = new Headers({ 'Content-Type': 'application/json' })
		let user = {
			"email": name,
			"password": password,
		}
		console.log(JSON.stringify(user));
		return this.http.post(this.apiUrl + '/users', JSON.stringify(user), { headers: headers }).map(
			(response: Response) => response.json()
		);
  }
}

