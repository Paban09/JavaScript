//perameter Destructing working with object

const person={
    name: "Paban",
    gender: "male"

};

// function printDetails(obj){
//     console.log(obj.name);
//     console.log(obj.gender);

// };

function printDetails({name,gender}){
    console.log(name);
    console.log(gender);

};


printDetails(person);