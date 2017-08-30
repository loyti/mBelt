import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class DoService {

  constructor(private _http: Http) { }

  newUser(user){
    console.log("in service's newUser method");
    return this._http.post('/api/users', user)
    .map(Response=>Response.json()).toPromise();
  }

  getCurrentUser(){
    return this._http.get('/api/current_user')
    .map(Response=>Response.json()).toPromise();
  }

  getAllq(){
    return this._http.get('/api/dash')
    .map(Response=>Response.json()).toPromise();
  }

  addq(question){
    console.log("in service's newQuestion method");
    return this._http.post('/api/addq', question)
    .map(Response=>Response.json()).toPromise();
  }

  addc(comment){
    console.log("in service's newComment method");
    return this._http.post('/api/addc', comment)
    .map(Response=>Response.json()).toPromise();
  }

  getAllc(){
    return this._http.get('/api/comments')
    .map(Response=>Response.json()).toPromise();
  }

  logout(){
  	return this._http.get('/api/logout')
  	.map(res=>res.json()).toPromise();
  }
}
