/*
 installing typescript: npm install -g typescript
 running a ts: tsc farhan.tsc
 running a js: node farhan.js

 https://github.com/TypeStrong/ts-node

*/
function log(message) {
    console.log(message);
}
function another1() {
    var j = 0;
    for (var i = 0; i < 5; i++, j++) {
        console.log("Adeepta i = " + i + " j = " + j);
    }
    console.log("The value of i" + i + " and  j = " + j);
}
function another2() {
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    console.log("Red = " + Color.Red);
}
var myMessage = "ARC";
log(myMessage);
// another1();
another2();
