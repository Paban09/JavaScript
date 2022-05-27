class Person{
    constructor(firstName,lastName,age){
        console.log("Person has been created");
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    };

    set fullName(fullName){
        console.log("Set fullName called");

        const[firstName,lastName]=fullName.split(" ");

        this.firstName=firstName;
        this.lastName=lastName;
    };

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    };
};

const paban= new Person("Abu","Bakar", 19);
console.log(paban.fullName);

paban.fullName="Masud Rana";
console.log(paban.fullName);
