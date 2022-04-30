function myApp(){
    const myVar="value1";
    function myFunc1(){
        const myVar="value59";
        console.log("Inside my func",myVar);
       

    };
    const myFunc2=function(){};
    const myFunc3=()=>{};
    console.log(myVar);
    myFunc1();
};

myApp();
