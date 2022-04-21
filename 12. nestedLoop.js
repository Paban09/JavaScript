let winningNo = 13;
let guessNo=Number(prompt("Guess a no: "));
console.log(typeof guessNo,guessNo);

if(guessNo===winningNo){
    console.log("You have guessed it right");
}else{
    if(guessNo>winningNo){
        console.log("Guess a smaller no");
    }else{
        console.log("Guess a bigger no");
    }
}