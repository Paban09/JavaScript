const URL='https://jsonplaceholder.typicode.com/posts';
//xhr=XMLHttpRequest
const xhr= new XMLHttpRequest();
//here xhr(can be any name) has become an object, so we can use object methods

// console.log(xhr);

//step 1 - open metod
//open metod will take two thing - ____ .open(which request, url)
//this work will done by browser in asynchronously 


// console.log(xhr.readyState);
xhr.open('GET',URL);
// console.log(xhr.readyState);

//this function will call when the ready state gets change


// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState);
    
//     if(xhr.readyState===4){
//         //we get response as json which was getting as string and have to coonvert it into js object
//         // console.log(typeof xhr.response);

//         const response=xhr.response;
//         //now to parse it
//         const data=JSON.parse(response); //converted string into object
//         console.log(data);
//     }

// };


//shortest way
xhr.onload=function(){
    const response=xhr.response;
    const data=JSON.parse(response); //converted string into object
    console.log(data);
}

xhr.send();