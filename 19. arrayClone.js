let array1=["Banla","English","Hindi","Urdu"];

//cloning array using slicing
let array2=array1.slice(0);
//cloning array using concatanation (faster)
let array3=[].concat(array1);
//cloning array using spread operator (mostly used)
let array4=[...array1];

console.log("array1 and array2 are same");
console.log(array1===array2);

console.log("array1 and array3 are same");
console.log(array1===array3);

console.log("array1 and array4 are same");
console.log(array1===array4);

array1.push("French");
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
