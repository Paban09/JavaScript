"use strict";

const person1={
    firstName:"Masud",
    age:21,
    about:function(){
        console.log(`Person name is ${this.firstName} and age is  ${this.age}`);
    }
};

const person2={
    firstName:"Paban",
    age:19,
    
};


person1.about.call(person2);

person1.about();