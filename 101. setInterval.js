
console.log('script start');

// JS will try to add it in the call stack in every second
setInterval(()=>{
    console.log(Math.random());
},1000);

console.log('script end');
