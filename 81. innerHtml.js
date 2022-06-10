//inner Html

const headLine=document.querySelector(".headline");
console.log(headLine.innerHTML);

headLine.innerHTML="<h2>Inner Html has been Changed </h2>";
headLine.innerHTML += " <button class=\"btn\"> Learn More </button>";
console.log(headLine.innerHTML);
