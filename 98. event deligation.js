
const grandparent = document.querySelector('.grandparent');

//event deligation
grandparent.addEventListener('click',(event)=>{
    // console.log(event); 
    //event taget will show which box we have clicked
    console.log(event.target); 

});