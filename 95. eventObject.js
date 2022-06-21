
const firstButton=document.querySelector("#one");
firstButton.addEventListener('click',(event)=>{
    console.log(event.target);
    console.log(event.currentTarget);
});

//whenever we add eventListener in element

//target means which element triggered our element
//current target means  which element we attach eventListener