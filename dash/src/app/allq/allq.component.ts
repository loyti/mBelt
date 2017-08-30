import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-allq',
  templateUrl: './allq.component.html',
  styleUrls: ['./allq.component.css']
})
export class AllqComponent implements OnInit {

  questions: object;

  constructor(private _doService: DoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._doService.getAllq()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.questions = response;

    })
    .catch((error)=>{
      console.log('catch',error);
    })
  }

}
