"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Information_1 = require("./Information");
var myInformation = new Information_1.Information();
myInformation.firstNumber = 2;
myInformation.secondNumber = 3;
myInformation.ShowTheNumbers();
myInformation.CalculateSum();
myInformation.ShowSummation();
var myInformation1 = new Information_1.Information(5, 6);
myInformation1.CalculateSum();
myInformation1.ShowSummation();
// Console.log(myInformation1.summation);  error as it is private   
var myInformation2 = new Information_1.Information();
myInformation2.FirstNumber = 5;
myInformation2.SecondNumber = 8;
myInformation2.CalculateSum();
console.log(myInformation2.Summation);
/*
    if compilation is showing the following error:
    Accessors are only available when targeting ECMAScript 5 and higher
    then compile the ts file accordingly:

    tsc --target es5 filename.ts
*/
