import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyHttpService {

  constructor(private myHttp: Http) { }

  public apps: JSON[];
 
  fetchData(){
     // Data folder must be added in  angular-cli.json file inside assets

    

     this.myHttp.get('data/students.json')
       .map(response => {
         this.apps = response.json();
       }); 
       return this.apps;
      }


  //   constructor(http: Http) {
  //     http.get(url).subscribe(result => {
  //         this.apps = result.json() as Applications[];
  //     }, error => console.error(error));
  // }}
 
  fetchDataFromNodeJs(){
    // Data folder must be added in  angular-cli.json file inside assets
  
   this.myHttp.get('data/students.json')
     .map(response => response.json())
     .subscribe(result => console.log(result));
 
  }

 showSuccess(){
   console.log('Ahsan ');
 }
 

}

interface Applications {
  id: number;
  name: string;
 }