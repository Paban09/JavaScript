const number=[5,6,9,7,2];

function multiplyBy2(number,index){
    console.log("index is ", index);
    console.log(`${number}*2=${number*2}`);

};

// multiplyBy2(number[0],0);

for (i=0;i<number.length;i++){
    multiplyBy2(number[i],i);
};

// number.forEach(multiplyBy2); //using call back

number.forEach(function(numbers,index){
    console.log(`index is ${index} and number is ${numbers}`)
});