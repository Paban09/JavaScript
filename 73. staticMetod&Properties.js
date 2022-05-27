class Person{
    constructor(firstName,lastName,age){
        console.log("Person has been created");
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    };

    static classInfo(){
        return "Just Checking";
    };

    static desc="This is static property";
    set fullName(fullName){
        console.log("Set fullName called");

        const[firstName,lastName]=fullName.split(" ");

        this.firstName=firstName;
        this.lastName=lastName;
    };

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    };

    eat(){
        console.log(`Modified : ${this.name} is eating`);
    };
};


const paban= new Person("Abu","Bakar", 19);

// console.log(paban.classInfo());  // this will give errror

const info=Person.classInfo();
console.log(info);

console.log(paban.desc); //undefined 

console.log(Person.desc);