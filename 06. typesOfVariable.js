
//undefined Variable
let firstName;

console.log(typeof firstName);
firstName="Pabon";
console.log(typeof firstName);

//null Variable
let lastName=null;
console.log(lastName);
console.log(typeof lastName); //this is js bug
lastName="Rana";
console.log(typeof lastName);

//BigInit
let myNumber=BigInt(12);
let mySameNumber=132n;

console.log(myNumber+mySameNumber);