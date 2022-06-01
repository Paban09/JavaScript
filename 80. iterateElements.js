// //get Multiple elements using getElements using class name

// const navItems=document.getElementsByTagName("a");
// const navItems=document.getElementsByClassName("nav-item");


// for(let i=0;i<navItems.length;i++){
//     const navItem=navItems[i];
//     navItem.style.backgroundColor="red";
//     navItem.style.border="5px solid green";
//     navItem.style.fontWeight="bold";
//     navItem.style.color="black";
// };

// for(let navItem of navItems){
//     navItem.style.backgroundColor="red";
//     navItem.style.border="5px solid green";
//     navItem.style.fontWeight="bold";
//     navItem.style.color="black";
// };

// //get Multiple elements using getElements using querySelecrtorAll
// const navItem=document.querySelectorAll(".nav-item");
// console.log(navItem[1].innerHTML);

let navItem=document.querySelectorAll("a");

// for(let i=0;i<navItem.length;i++){
//     const navItems=navItem[i];
//     navItems.style.backgroundColor="red";
//     navItems.style.border="5px solid green";
//     navItems.style.fontWeight="bold";
//     navItems.style.color="black";
// };

navItem.forEach((navItems)=>{
    navItems.style.backgroundColor="red";
    navItems.style.border="5px solid green";
    navItems.style.fontWeight="bold";
    navItems.style.color="black";
})