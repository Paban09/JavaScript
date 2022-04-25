//Spread operator for array
const array1=[1,2,3];
const array2=[4,5,6];

const newArray=[...array1,...array2];
const newArray1=[..."123456"];

console.log(newArray);
console.log(newArray1);

//Spread operator for object

const obj1={
    key1:"value1",
    key2:"value2"
};

const obj2={
    key1:"value5",
    key3:"value3",
    key4:"value4"
};

//as the obj can't have te same key last obj key will overirde the first one

// const newObj={...obj2,...obj1};
const newObj1={...obj2,...obj1,key22:"value22"};
const newObj2={..."abcde"};
console.log(newObj1);
console.log(newObj2);
