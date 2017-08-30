import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AddqComponent } from './addq/addq.component';
import { AllqComponent } from './allq/allq.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path:'dash',
    component: DashComponent,
    children: [
      {
        path: 'allq',
        component: AllqComponent
      },
      {
        path: 'comment',
        component: CommentComponent
      }

    ]
  },
  {
    path:'addq',
    component: AddqComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
