import {LikeComponent, anotherLikeComponent} from './like'

let myComponent = new LikeComponent(10, true);

//console.log(`Likecount  = ${myComponent.likeCount}`);

for (let i =0;i<5; i++){
    myComponent.onClick();
    console.log(`Likecount  = ${myComponent.likeCount}`);    
    
}

console.log(`--------------`); 


let myAnotherComponent = new anotherLikeComponent(5, false); 
for (let i =0;i<5; i++){
    myAnotherComponent.onClick();
    console.log(`Likecount  = ${myAnotherComponent.likeCount} and isSelected = ${myAnotherComponent.isSelected}`);        
}
