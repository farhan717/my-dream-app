"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var myComponent = new like_1.LikeComponent(10, true);
//console.log(`Likecount  = ${myComponent.likeCount}`);
for (var i = 0; i < 5; i++) {
    myComponent.onClick();
    console.log("Likecount  = " + myComponent.likeCount);
}
console.log("--------------");
var myAnotherComponent = new like_1.anotherLikeComponent(5, false);
for (var i = 0; i < 5; i++) {
    myAnotherComponent.onClick();
    console.log("Likecount  = " + myAnotherComponent.likeCount + " and isSelected = " + myAnotherComponent.isSelected);
}
