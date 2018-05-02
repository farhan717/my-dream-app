import { Component, Injectable } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MyDataService} from './allservices/my-data.service';
import {MyHttpService} from './allservices/my-http.service';
import { Http}  from '@angular/http';


import { PipepracticeComponent } from './pipepractice/pipepractice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app started';
  obj = [{
    roll: "1",
    name: "adeepta"
  },
  {
    roll: "12",
    name: "Ahsan"
  },
  {
    roll: "12",
    name: "Sabriyah"
  },
  {
    roll: "2",
    name: "Rumana"
  }];
  anArray = ["abc", "efg", "gsd"];
  listItems = [];
  newItem = "";
  pipeGlobal = [];
  pushItem = function(){
    if(this.newItem!= ""){
      this.listItems.push(this.newItem);
      this.newItem="";
    }
  }
  removeItem = function(ind){
    this.listItems.splice(ind,1);
  }
  
  //constructor(private newservice: MyDataService, private anothernewservice: MyHttpService){};

  public apps: JSON[]=[];
  found = "bhalo";

  constructor(http: Http) {
    http.get('data/students.json')
    .subscribe(result => {
      this.apps =  result.json();

      console.log(this.apps)
      this.found = "bhalo na"
    })


    console.log(this.apps);
  }
  
//   constructor(http: Http) {
//     http.get(url).subscribe(result => {
//         this.apps = result.json() as Applications[];
//     }, error => console.error(error));
// }}

  

  mySQRT = function(aValue){
    return this.newservice.sqrt(aValue);
  }
  /*ngOnInit()
  {
//    this.newservice.sqrt();
 //   console.log(this.newservice.sqrt(25));
      this.anothernewservice.fetchData();
   //   this.anothernewservice.fetchDataFromNodeJs();
      //this.anothernewservice.showSuccess();
    }
    */
  arrayInApp = [5, 4, 7, 9, 1];
}
