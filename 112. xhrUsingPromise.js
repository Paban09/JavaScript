const URL='https://jsonplaceholder.typicode.com/posts';

function sendRequest(method,URL){
    return new Promise(function(resolve,reject){
        const xhr= new XMLHttpRequest();
        xhr.open(method,URL);
        xhr.onload=function(){
            if(xhr.status>=200 && xhr.status<300){
                 resolve(xhr.response);
            }else{
                reject(new Error("Something went worng"));
            }            
        }
        xhr.onerror=()=>{
            console.log('network error');
        }
        xhr.send();

    })
}

//Promise Chaining
sendRequest('GET',URL)
    .then(response=>{
        const data=JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data=>{
        // console.log(data[3].id);
        const id=(data[3].id);
        return id;
    })
    .then(id=>{
        // console.log(id);
        const URL2= `${URL}/${id}`;
        return sendRequest("GET",URL2);
    })
    .then(newResponse=>{
        // console.log(newResponse);
        const newData=JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error=>{
        console.log(error);
    })
