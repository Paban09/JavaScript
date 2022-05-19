const myArray=["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];

console.log(myArray);

//for add
myArray.splice(2,0,"inserted");
console.log(myArray);

//for delete
myArray.splice(3,5);
console.log(myArray);

//show deleteed item
const deletedItem= myArray.splice(1,1);
console.log(deletedItem);
console.log(myArray);