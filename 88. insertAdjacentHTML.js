//element.insertAdjacnetHTML('where','HTML');
//beforeend; //work as append
//afterend;
//beforebegin;
//afterbegin; //worok as prepend

const todoList=document.querySelector('.todo-list');
todoList.insertAdjacentHTML("beforeend","<li>Learn Html</li>");
todoList.insertAdjacentHTML("afterbegin","<li>Learn CSS</li>");

// this two will add elements before and after the ul
todoList.insertAdjacentHTML("beforebegin","<li>Learn JS</li>");
todoList.insertAdjacentHTML("afterend","<li>Learn PHP</li>");


