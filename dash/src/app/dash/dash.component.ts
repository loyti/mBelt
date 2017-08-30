import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginComponent } from './../login/login.component';
import { AllqComponent } from './../allq/allq.component';
import { CommentComponent } from './../comment/comment.component';



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  currentUser: object;
  questions: object[];
  comments: object[];

  constructor(private _doService: DoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    this._doService.getCurrentUser()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.currentUser = response;

    })
    .catch((error)=>{
      console.log('catch',error);
    }),

    this._doService.getAllq()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.questions = response;
    })
    .catch((error)=>{
      console.log('catch',error);
    }),

    this._doService.getAllc()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.comments = response;
    })
    .catch((error)=>{
      console.log('catch',error);
    })
  }

}
