
//classList is a property which will tell us section-todo has how many classes
const sectionTodo=document.querySelector(".section-todo");
console.log(sectionTodo.classList);

//want to provide class using javaScript
sectionTodo.classList.add('bg-dark');
console.log(sectionTodo.classList);

//to remove a class using javaScript
sectionTodo.classList.remove('container');
console.log(sectionTodo.classList);

//to check any class exist or not
const ans=sectionTodo.classList.contains('section-todo');
console.log(ans);

//if any class is already there toggle will remove that if any class isn't there it will add it 

sectionTodo.classList.toggle('container');
console.log(sectionTodo.classList);