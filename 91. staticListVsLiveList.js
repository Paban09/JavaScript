
//static list vs live lsit

//static node list //provide NodeList
//querySelectorAll will provide us the static list
const listItems=document.querySelectorAll('.todo-list li'); 
const ul=document.querySelector('.todo-list');
const sixthLi=document.createElement('li');
sixthLi.textContent='item 6th';
ul.append(sixthLi);
console.log(listItems); //this is still going to show n element not n+1

//live node list  //provide HTMLCollection
//getElementBy will provide us the live list
const listItem=ul.getElementsByTagName('li'); 
console.log(listItem); //this is going to show n+1 element or live element
