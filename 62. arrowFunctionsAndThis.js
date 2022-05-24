const person1={
    firstName:"Masud",
    age:21,
    about:()=>{
        console.log(`Person name is ${this.firstName} and age is  ${this.age}`);
    }
};

person1.about();
person1.about(person1);
