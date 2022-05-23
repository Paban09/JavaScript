"use strict";

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is  ${this.age}`);
};

const person1={
    firstName:"Masud",
    age:21,
    about:personInfo
};

const person2={
    firstName:"Rana",
    age:19,
    about:personInfo
};

const person3={
    firstName:"Paban",
    age:22,
    about:personInfo
};

person1.about();
person2.about();
