let getTemp=Number(prompt("Enter the Temperature: "));
console.log(getTemp);
if (getTemp===0){
    console.log("Its freezing");
}else if(getTemp<=20){
    console.log("Its too cold");
}else if(getTemp<=24){
    console.log("Its romm temperature");
}else if(getTemp<=33){
    console.log("Its hot outside");
}else {
    console.log("Very hot");
}