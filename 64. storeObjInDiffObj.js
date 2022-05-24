const userMethod={
    about:function(){
        return `User name is ${this.firstName}, age is  ${this.age} and live in ${this.add}`;
    },

    is18:function(){
        return this.age>=18;
    }
};

function createUser(firstName,age,add){
    const user={};
    user.firstName=firstName;
    user.age=age;
    user.add=add;
    user.about=userMethod.about;
    user.is18=userMethod.is18;
    return user;
};

const user1=createUser("Masud",13,"Kaliganj");
const user2=createUser("Paban",19,"Keraniganj");

console.log(user1.about());
console.log(user1.is18());

console.log(user2.about());
