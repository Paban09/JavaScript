class Animal{
    constructor(name,age){
        console.log("Animal is created");
        this.name=name;
        this.age=age;
    };

    about(){
        console.log(`This is a ${this.name}`);
    };

    isCute(){       
            return this.age>=13;
    };
    
};

class Dog extends Animal{
   
};

const tom=new Animal("Tom",12);
const tommy=new Dog("Tommy",13);

console.log(tom);
console.log(tom.isCute());


console.log(tommy);
console.log(tommy.isCute());
