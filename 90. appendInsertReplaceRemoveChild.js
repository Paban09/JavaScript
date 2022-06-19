//this are old methods to run in internet explorer

const todoList=document.querySelector(".todo-list"); // tagerting the todo list
const referanceNode=document.querySelector(".first-todo");  // tagerting the first element in todo list
const referanceNode2=document.querySelector(".second-todo");

//append Child
const li=document.createElement('li');
li.textContent="Learn JS";
todoList.appendChild(li);

//coling the node
const li2=li.cloneNode(true);
const li3=li.cloneNode(true);

//insert before
todoList.insertBefore(li2,referanceNode);

//replace child (todo-1 with learn JS)
todoList.replaceChild(li3,referanceNode);

//removing child
todoList.removeChild(referanceNode2);