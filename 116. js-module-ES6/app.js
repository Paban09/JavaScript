// import {firstName} from "./utils/fname.js"
import {firstName as fName} from "./utils/fname.js"

import{age} from './utils/age.js'

// import{Person} from "./utils/Person.js"
// import Person from "./utils/Person.js"
import Person,{Person2} from "./utils/Person.js"

//if we use both the class as simple export
// import {Person,Person2} from "./utils/Person.js"


console.log(fName,age);

const person1= new Person(fName,age);

console.log("Next line is from class 1");
person1.info();

const person2= new Person2(fName,age);
console.log("Next line is from class 2");
person2.info();