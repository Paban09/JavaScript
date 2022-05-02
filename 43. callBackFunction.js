function myFunc2(){
    console.log("Hello Paban");
};

function myFunc(a){
    a();
    console.log(a);
};

myFunc(myFunc2);