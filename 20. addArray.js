let array1=["Banla","English","Hindi","Urdu"];
console.log("array1");
console.log(array1);


//cloning array  and adding using slicing
let array2=array1.slice(0).concat(["temp3","temp4"]);
console.log("array2");
console.log(array2);


//cloning array and adding using concatanation (faster)
let array3=[].concat(array1,["temp1","temp2"]);
console.log("array3");
console.log(array3);

//cloning array and adding using spread operator (mostly used) 
let array4=[...array1, ...array3];
console.log("array4");
console.log(array4);





