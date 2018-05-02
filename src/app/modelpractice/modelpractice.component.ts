import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
   imports: [
    ReactiveFormsModule,
    FormGroup, 
    FormControl,
    BrowserModule
  ]
})
@Component({
  selector: 'app-modelpractice',
  templateUrl: './modelpractice.component.html',
  styleUrls: ['./modelpractice.component.css']
})
export class ModelpracticeComponent implements OnInit {
  amarform;
  ngOnInit() {
    
    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    // Important reference for regex

    this.amarform = new FormGroup({
        dec: new FormControl("", 
              Validators.compose([
                Validators.maxLength(20),
                Validators.pattern('[0-9]+')
              ])),
        bin: new FormControl("", 
              Validators.compose([
                Validators.maxLength(20),
                Validators.pattern('(0|1)+') // Allowed inputs are binary characters
        ])),
        oct: new FormControl("", 
        Validators.compose([
          Validators.maxLength(7),
          Validators.pattern('[0-7]+')
        ])),
        hex: new FormControl("", 
        Validators.compose([
          Validators.maxLength(5),
          Validators.pattern('[(0-9)|(a-f)|(A-F)]+')
        ]))
    });
    
  }
  binFlag = true;
  octFlag = true; 
  hexFlag = true; 

  decChanged = function(oldValue, newValue){
    if(newValue!=""){
      this.amarform.patchValue({bin: parseInt(newValue, 10).toString(2)})
      this.amarform.patchValue({oct: parseInt(newValue, 10).toString(8)})
      this.amarform.patchValue({hex: parseInt(newValue, 10).toString(16)})
    }
    else{
      this.amarform.patchValue({bin: ""})
      this.amarform.patchValue({oct: ""})
      this.amarform.patchValue({hex: ""})
    }
  }
  binChanged = function(oldValue, newValue){
    if(this.binFlag==true)
    {
      this.binFlag = false;
      if(newValue!="")
      { 
        this.amarform.patchValue({dec: parseInt(newValue, 2).toString(10)})
      }
      else
      {
        this.amarform.patchValue({dec: ""})

      }
    }
   //console.log(newValue);
   this.binFlag = true;
  }
  octChanged = function(oldValue, newValue){
    if(this.octFlag==true)
    {
      this.octFlag = false;
      if(newValue!="")
      { 
        this.amarform.patchValue({bin: parseInt(newValue, 8).toString(2)})
      }
      else
      {
        this.amarform.patchValue({bin: ""})

      }
    }
   //console.log(newValue);
   this.octFlag = true;
   
  }
  hexChanged = function(oldValue, newValue){
    if(this.hexFlag==true)
    {
      this.hexFlag = false;
      if(newValue!="")
      { 
        this.amarform.patchValue({oct: parseInt(newValue, 16).toString(8)})
      }
      else
      {
        this.amarform.patchValue({oct: ""})

      }
    }
   //console.log(newValue);
   this.hexFlag = true;
    
  }

}
