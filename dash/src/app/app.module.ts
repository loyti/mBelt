import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DoService } from './do.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { AddqComponent } from './addq/addq.component';
import { AllqComponent } from './allq/allq.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    AddqComponent,
    AllqComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
