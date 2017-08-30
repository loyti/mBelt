import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-addq',
  templateUrl: './addq.component.html',
  styleUrls: ['./addq.component.css']
})
export class AddqComponent implements OnInit {

  newQ: object = {title: ""};
  questions: object[];

  constructor(private _doService: DoService) { }

  ngOnInit() {
  }
  addQ(questionToAdd){
    console.log("addQ in component");
    console.log(questionToAdd);
    this._doService.addq(questionToAdd)
    .then((response)=>{
      console.log("then");
      console.log(response);
    })
    .catch((error)=>{
      console.log('catch',error);
    })
  }
}
