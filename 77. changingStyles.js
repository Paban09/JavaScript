
// changing style of an element

//selecting inside div which class is headline and it's h2
const mainHeading=document.querySelector("div.headline h2"); 

// console.log(mainHeading);
mainHeading.style.color="black";

//in css we normally write code with - like (background-color) but in JS we have to write it as (backgroundColor)
mainHeading.style.backgroundColor="red";


//giving it a border
mainHeading.style.border="5px solid green";
