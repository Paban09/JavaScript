
const todoList=document.querySelector('.todo-list');

const newTodoItem=document.createElement('li');
newTodoItem.textContent="Learn Code";
// todoList.before(newTodoItem);
todoList.after(newTodoItem);
