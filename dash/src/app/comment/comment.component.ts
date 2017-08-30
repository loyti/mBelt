import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  newC: object = {title: ""};
  comments: object[];

  constructor(private _doService: DoService) { }

  ngOnInit() {
  }
  addC(commentToAdd){
    console.log("addc in component");
    console.log(commentToAdd);
    this._doService.addc(commentToAdd)
    .then((response)=>{
      console.log("then");
      console.log(response);
    })
    .catch((error)=>{
      console.log('catch',error);
    })
  }

}
