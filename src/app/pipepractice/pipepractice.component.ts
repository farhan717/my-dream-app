import { Component, OnInit } from '@angular/core';
import { SortPipe} from './sortpipe';
import { NgModule} from '@angular/core';



@NgModule({
  declarations: [
    SortPipe  
  ],
  imports: [],
  providers: []
})


@Component({
  selector: 'app-pipepractice',
  templateUrl: './pipepractice.component.html',
  styleUrls: ['./pipepractice.component.css']
})
export class PipepracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = "Sabriyah Sahira Ahsan Adeepta";
  day = new Date();
  jsonVal =   { moo: 'foo', goo: { too: 'new' }}
  arr = [12, 3, 35, 34, 43, 65];
}
