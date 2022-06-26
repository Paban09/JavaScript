
//async await

const URL = 'https://jsonplaceholder.typicode.com/posts';

//when async is declared before a function it will return Promise by default
//async will handle by browser
async function getPost(){
    //await will wait the time ti resolve
    const response=await fetch(URL);
    // console.log(response);
    if(!response.ok){
        throw new Error('Something is wrong');
    }
    //json method also return promise
    const data= await response.json();
    // console.log(data);
    return data; 
}

// const retuned = getPost();
// console.log(retuned);

getPost()
    .then(data=>{
        console.log(data);
    })
    .catch(error => {
        console.log('inside catch')
        console.log(error);
    })
