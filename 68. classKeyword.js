class CreateUser{
    
    constructor(firstName,age){
        console.log("Constructor Called");
        this.firstName=firstName;
        this.age=age;
    };

    about(){
        return `${this.firstName} is ${this.age} years old`;
    };

    is18(){
        return this.age>=18;
    };

};

const user1=new CreateUser("Paban",18);
console.log(Object.getPrototypeOf(user1));