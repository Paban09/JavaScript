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
    constructor(name,age,speed){
        console.log("Dog is created");
        super(name,age);
        this.speed=speed;

    };

    run(){
        return `${this.name} is running at ${this.speed} per hour.`
    };
   
};

const tommy=new Dog("Tommy",13,45);
const tom=new Animal("Tom",12);
console.log(tom);
console.log(tom.isCute());
// console.log(tom.run());

console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.run());

const tomas=new Dog("Tomas",15);
console.log(tomas);
console.log(tomas.isCute());
console.log(tomas.run());

