

//adding element to webpage using innerHtml
//this process is not convinient because of too much rendering
const todoList=document.querySelector('.todo-list');
console.log(todoList);
console.log(todoList.innerHTML);

todoList.innerHTML=todoList.innerHTML+ "<li>new todo</li>";
todoList.innerHTML+= "<li>new todo 2</li>";

console.log(todoList.innerHTML);
