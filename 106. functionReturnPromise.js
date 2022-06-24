


//function returning promise
function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({value:"friedRice"});
        } else {
            reject("Couldn't do it");
        }
    });
}

ricePromise().then(
    (myFriedRice) => {
        console.log("let's Eat ", myFriedRice);

    }).catch(
    (error) => {
    console.log(error);
});