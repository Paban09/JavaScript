"use strict";

function about(guitar, band){
    console.log(`Person name is ${this.firstName} and age is  ${this.age} and` , guitar,band  );
    
};

const person1={
    firstName:"Masud",
    age:21
    
};

const person2={
    firstName:"Rana",
    age:23
    
};

const person3={
    firstName:"Paban",
    age:19
    
};

about.call(person2,"AXE","LRB");
about.apply(person1,["Teylor","Souls"]);
const func= about.bind(person3,"TGM","Kureghor");
func();
