function CreateUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
};

CreateUser.prototype.about=function(){
    console.log(`${this.firstName} is ${this.age} years old`)
};

const user1=new CreateUser("Paban",18);
user1.about();