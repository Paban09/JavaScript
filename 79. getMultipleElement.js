
//get Multiple elements using getElements using class name
const navItems=document.getElementsByClassName("nav-item");
console.log(navItems[0].innerHTML);

//get Multiple elements using getElements using querySelecrtorAll
const navItem=document.querySelectorAll(".nav-item");
console.log(navItem[1].innerHTML);