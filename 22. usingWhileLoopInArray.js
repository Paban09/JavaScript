let array1=["Banla","English","Hindi","Urdu"];

var i=0;
while(i<=array1.length-1){
    console.log(array1[i]);
    i++;
}

let array2=[]; //declaring a empty array
var i=0;
while(i<=array1.length-1){
    array2.push(array1[i].toUpperCase());
    i++;
}

console.log("array1 is",array1);
console.log("array2 is",array2);