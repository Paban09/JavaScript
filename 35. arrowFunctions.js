const happyBirthday=(name)=>{
    console.log(`Happy Bithday ${name}`);
};


y=prompt("Enter the name to wish",);
happyBirthday(y);

const isEven=(num)=>{
    if(num%2===0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
};

x=Number(prompt("Enter the number to check odd even",));
isEven(x);