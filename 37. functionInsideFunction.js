const app=()=>{
    const myfunc=()=>{
    console.log("inside func");
    };
    // myfunc();
    console.log("inside app");
    myfunc();
};

app();
// myfunc();