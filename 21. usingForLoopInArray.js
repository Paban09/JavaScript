let array1=["Banla","English","Hindi","Urdu"];
console.log("Length of the array is",array1.length);

//accessing value using for loop
for(i=0;i<=(array1.length)-1;i++){
    console.log(array1[i]);
}

let array2=[]; //declaring a empty array

for(i=0;i<=(array1.length)-1;i++){
    array2.push(array1[i].toUpperCase());
}

console.log("array1 is",array1);
console.log("array2 is",array2);