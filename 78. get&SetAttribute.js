// get and set attribute

//get
const link=document.querySelector("a");
console.log(link.getAttribute("href").slice(1));

//set
link.setAttribute("href","www.youtube.com");
console.log(link.getAttribute("href"));
