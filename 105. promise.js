
//prmise is a browser feature and work as a asynchronus programming
//Promise - this represent future value that we will get later on

const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

//can call it class or constructor function which will create 
// in promise have to pass function known as executor function which will execute promise
//in this functoin have to pass two function as peremeter
//resolve and resolve method

//created promise
//promise is object which will store in js memory
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    } else {
        reject("Couldn't do it");
    }
});



//consume promise
//promise will be consume by browser and will be adden in a micro task queue
//how to consume is very important
//then as a input will take a call back function
//in then we can input two callback function
//if browser have micro task queue and callBack queue then first  micro task queue will run beacuse  micro task queue has more priority


friedRicePromise.then(
    //when promise resolve
    (myFriedRice) => {
        console.log("let's Eat ", myFriedRice);

    }

    // ,
    // //when promise reject
    // (error) => {
    //     console.log("we ", error);
    // });
).catch((error) => {
    console.log(error);
})
