const obj1={
    one: "data1",
    two: "data2"
};

//Here we create obj2's proto as obj1
const obj2=Object.create(obj1);
obj2.three="data3";


//__proto__, [[Prototype]] are same

console.log(obj2);
console.log(obj2.__proto__);