
//callBacks generally used in asynchronus programming


//in synchronus programming
function getTwoNumberAndAdd(num1,num2,callBack){
    console.log(`two numbers are ${num1} and ${num2}`);
    callBack(num1,num2);
};

function addTwoNumber(num1,num2){
    console.log('Sum of two number is',num1+num2);
};

getTwoNumberAndAdd(3,4,addTwoNumber);


