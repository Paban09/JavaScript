// Map method
// Method of array
// works as for each and take input as a call back function

const numbers=[5,8,1,6,9];

// const squre=function (number){
//     return (number*number);
// };

//map will return a new array in return

// const squreNumber= numbers.map(squre);
// console.log(squreNumber);

const squreNumber= numbers.map((number,index)=>{
    return `index:${index}, squre ${number*number}`;
});

console.log(squreNumber);