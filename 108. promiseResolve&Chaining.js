
// const myPromise=Promise.resolve(5);

// myPromise.then(value=>{
//     console.log(value);
// })

//then method always return Promise

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("Pabon");
    });
}

myPromise().then(value=>{
    console.log(value);
    value+='var';
    return value; //returning promise
    //return Promise.resolve(value) //working like this
    //if the value wasn't returned it would be undefined
}).then(value=>{
    console.log(value);
})