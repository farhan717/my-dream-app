import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }
  sqrt(i){
    return Math.sqrt(parseFloat(i)).toString();
  }

}
