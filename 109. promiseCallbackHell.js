

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');


function changeText(element, text, color, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (element) {
                element.textContent = `${text}`;
                element.style.color = `${color}`;
                resolve();
            } else {
                reject("Element not found");
            }
        }, time);
    })
 
}

// const returnPromise=changeText(heading1,'Masud','red',1000);
// returnPromise.then(()=>{
//    return changeText(heading2,'Rana','green',2000);
// })
// .then(()=>{
//     return changeText(heading3,'Paban','yellow',3000);
//  })

changeText(heading1,'Masud','red',1000)
    .then(()=>{
    return changeText(heading2,'Rana','green',2000);
})
    .then(()=>{
    return changeText(heading3,'Paban','yellow',3000);
})
    .catch((error)=>{
        alert(error);
    });