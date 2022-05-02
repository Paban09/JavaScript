function call(){
    function hello(){
        return "Hello Everyone";
    };
    return hello;
};

const hey=call();
console.log(hey());