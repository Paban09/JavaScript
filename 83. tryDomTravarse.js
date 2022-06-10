//selecting h1 element
const h1=document.querySelector("h1");
console.log(h1);

//storing h1 parents div and changing its style
const h1ParentDiv=h1.parentNode;

h1ParentDiv.style.color='red';
h1ParentDiv.style.backgroundColor='green';

//selecting divs parent body and changing style 
const h1body=h1.parentNode.parentNode;
h1body.style.backgroundColor="yellow";

//we can select by element
const head=document.querySelector("head");
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);
