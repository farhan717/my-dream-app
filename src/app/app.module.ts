import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MemberComponent } from './member/member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PgComponent } from './pg/pg.component';
import { PipepracticeComponent } from './pipepractice/pipepractice.component';
import {SortPipe} from './pipepractice/sortpipe';
import {MyDataService} from './allservices/my-data.service';
import { HttpModule} from '@angular/http';
import { ModelpracticeComponent } from './modelpractice/modelpractice.component';
import { MyHttpService } from './allservices/my-http.service';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MyComponentComponent,
    MemberComponent,
    PgComponent,
    PipepracticeComponent,
    ModelpracticeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'product',
        component: MyComponentComponent
      }
    ])
  ],
  providers: [MyDataService, MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
