
const ul=document.querySelector('.todo-list');
const li=document.createElement('li');
li.textContent="Learn with Pabon";

//cloning the node
// const li2=li.cloneNode(); //this will not work perfectly
const li2=li.cloneNode(true); //for ture it will clone the div

ul.append(li);
ul.prepend(li2);

