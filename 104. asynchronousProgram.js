
//callBack, callBack hell, the pyramid doom

//asynchronous programming
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading');

//callBack hell
setTimeout(() => {
    heading1.textContent = 'Hello Masud';
    heading1.style.color = 'red';
    setTimeout(() => {
        heading2.textContent = 'Hello Rana';
        heading2.style.color = 'blue';
        setTimeout(() => {
            heading3.textContent = 'Hello Paban';
            heading3.style.color = 'green';
        },3000);
    }, 2000);
}, 1000);



function changeText(element, text, color, time, successCallBack,failureCallBack) {

    setTimeout(() => {
        if (element) {
            element.textContent = `${text}`;
            element.style.color = `${color}`;
            if (successCallBack) { successCallBack(); }
        } else {
            if(failureCallBack){
                failureCallBack();
            }
        }
    }, time);

}


//pyramid of doom
changeText(heading4, "Hello Heading 4", "purple", 1000,()=>{
    changeText(heading5, "Hello Heading 5", "pink", 2000,()=>{
        changeText(heading6, "Hello Heading 6", "yellow", 3000,()=>{},()=>{
            console.log("element 6 doesn't exist");});
    },()=>{console.log("element 5 doesn't exist");});
},()=>{console.log("element 4 doesn't exist");});



