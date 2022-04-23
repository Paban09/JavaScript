const languages=["Bangla","English","Hindi","Urdu","French"];

let [myVar1,myVar2,myVar3]=languages;
console.log("Parent array : ",languages);


let newLanguages=languages.slice(3);
console.log("Array of newLanguages : ",newLanguages);


[myVar1,myVar2,myVar3,...newLanguages]=languages;
console.log("value of myVar1 : ",myVar1);
console.log("value of newLanguages : ",newLanguages);
console.log("value of myVar3 : ",myVar3);