
const item=["intem1","intem2"];

const numbers=new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(4);
numbers.add(item);

for (let number of numbers){
    console.log(number);
};

