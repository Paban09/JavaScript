const URL = 'https://jsonplaceholder.typicode.com/posts';

//fetch will send request and will sent get request by default
//fetch will get rejected when it face any network issue

//fetch will return promise
fetch(URL)
    .then(response => {
        //this will also return promise
        // console.log(response.json());
        // return(response.json());

        if(response.ok){
            return(response.json());
        }else{
            throw new Error("Something wrong")
        }
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log('inside catch')
        console.log(error);
    })



