
const todoList=document.querySelector('.todo-list');
const newTodoItem=document.createElement('li');


// const newTodoItemText=document.createTextNode('Teach Students');
// newTodoItem.append(newTodoItemText);
newTodoItem.textContent="Learn Code"; //short way then the commented line


//append will add in last and prepend will add in first
// todoList.append(newTodoItem);
todoList.prepend(newTodoItem);
// todoList.appendChild(newTodoItem); //append and appendChild are same but it is old


console.log(todoList);
console.log(todoList.innerHTML);

//removing the element
const todoList1=document.querySelector('.todo-list li');
console.log(todoList1);

todoList1.remove();
console.log(todoList);
console.log(todoList.innerHTML);


