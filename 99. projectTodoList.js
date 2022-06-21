
const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
// const todoInput=document.querySelector("#addTodo");

const todoList=document.querySelector('.todo-list');

// console.log(todoInput);
todoForm.addEventListener('submit', (event) => {
    event.preventDefault(); //this will stop to refresh
    // console.log('Form Submitted');
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement('li');
    const newLiInnerHtml =
        `<span class="text"> ${newTodoText}</span>
            <div>
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>`;

    newLi.innerHTML=newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});


todoList.addEventListener('click',(event)=>{
    // console.log(event.target);
    //check 
    // console.log(event.target.classList);
    if(event.target.classList.contains("done")){
        const liSpan=event.target.parentNode.previousElementSibling;
        // console.log(event.target);
        // console.log(event.target.parentNode);
        // console.log(liSpan);
        liSpan.style.textDecoration='Line-through';
    };
    if(event.target.classList.contains("remove")){
        const tagetedLi=event.target.parentNode.parentNode;
        tagetedLi.remove();
    };

    
});