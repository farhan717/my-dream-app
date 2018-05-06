"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Information = /** @class */ (function () {
    function Information(f, s) {
        this.firstNumber = f;
        this.secondNumber = s;
    }
    Information.prototype.ShowTheNumbers = function () {
        console.log("First Number : " + this.firstNumber);
        console.log("Second Number : " + this.secondNumber);
    };
    Information.prototype.CalculateSum = function () {
        this.summation = this.firstNumber + this.secondNumber;
    };
    Information.prototype.ShowSummation = function () {
        console.log("Summation : " + this.summation);
    };
    Object.defineProperty(Information.prototype, "Summation", {
        get: function () {
            return this.summation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Information.prototype, "FirstNumber", {
        set: function (v) {
            this.firstNumber = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Information.prototype, "SecondNumber", {
        set: function (v) {
            this.secondNumber = v;
        },
        enumerable: true,
        configurable: true
    });
    return Information;
}());
exports.Information = Information;
