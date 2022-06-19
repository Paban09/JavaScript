
// const btn=document.querySelector('.btn-headline');
const btn=document.getElementById('btn-headline');

console.dir(btn);

// function clickMe(){
//     console.log("Clicked ME...!!!");
// };

// btn.addEventListener("click",clickMe);

// btn.addEventListener("click",function(){
//     console.log('You clicked the button.....!!!');
// });

btn.addEventListener("click",()=>{
    console.log('You clicked the button.....!!!');
});
