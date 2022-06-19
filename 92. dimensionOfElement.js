
//Dimension Of Element

const sectionTodo=document.querySelector('.section-todo');

const info=sectionTodo.getBoundingClientRect();
console.log(info);

const info2=sectionTodo.getBoundingClientRect().height;
console.log("Height");
console.log(info2);

const info3=sectionTodo.getBoundingClientRect().width;
console.log("Width");
console.log(info3);
