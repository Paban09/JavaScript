
//javaScript is a synchronus and single threaded programming laguage 
//in synchronus programming code execute line by line


//Asynchronus programming
//setTimeout take input as a function
//setTimeout is provided by the browser
// setTimeout(function name, time as mili second); 

console.log('Script Start');
// function hello(){
//     console.log('Hello World 1sec later');
// }
// setTimeout(hello,1000); 
// console.log('Script End');

// setTimeout(()=>{
//     console.log('Timeout 10 second');
// },10000);

const id=setTimeout(()=>{
    console.log('Timeout minimun 1 second');
},1000);

for(let i=0;i<100;i++){
    console.log('...');
}

console.log('Set Time Out Id is',id);
console.log('Clearing Time Out');
clearTimeout(id);
console.log('Script End');
