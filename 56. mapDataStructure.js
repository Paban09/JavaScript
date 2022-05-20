
const person=new Map();

person.set("firstName","Paban");
person.set("age",23);
person.set(1,"one");

console.log(person);
console.log(person.get(1));

for (let key of person.keys()){
    console.log(key, typeof key);
};

