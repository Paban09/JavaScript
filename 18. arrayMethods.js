let fruits=["mango","banana","apple"];
console.log(fruits);
//push pop is faster than shift and unshift 

//push to add in last
fruits.push("banana");
console.log(fruits);

//pop to remove from last
let poppedFruit=fruits.pop();
console.log(poppedFruit);
console.log(fruits);

//unshift to add in first
fruits.unshift("grapes");
console.log(fruits);

//shift to remove from start
let shiftFruit=fruits.shift();
console.log(shiftFruit);
console.log(fruits);