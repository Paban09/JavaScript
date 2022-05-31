//Functoin Can Retun function

function outerFunction(){

    function innerFunction(){
        console.log("Let's have fun.");
    }

    return innerFunction;
};

const ans=outerFunction();

console.log(ans);
console.log(ans());

