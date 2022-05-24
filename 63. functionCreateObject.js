function createUser(name,age,add){
    const user={};
    user.name=name;
    user.age=age;
    user.add=add;

    user.about=function(){
        return `User name is ${name}, age is  ${age} and live in ${add}`;
    };
    
    user.is18=function(){
        return this.age>=18;
    };
    return user;
};

const user1=createUser("Masud",13,"Kaliganj");
var about=user1.about();
var is18=user1.is18();
console.log(user1);
console.log(is18);
console.log(about);

const user2=createUser("Paban",19,"Keraniganj");
var about=user2.about();
var is18=user2.is18();
console.log(user2);
console.log(is18);
console.log(about);

