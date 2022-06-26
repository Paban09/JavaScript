
const URL = 'https://jsonplaceholder.typicode.com/posts';


//Post method
//in fetch we can pass 2nd optional argument which is a object (key value pair)

//post is reponsible for creating data
// stringify will convert the object into jason value

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(response => {
        
        if (response.ok) {
            return (response.json());
        } else {
            throw new Error("Something wrong")
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('inside catch')
        console.log(error);
    })

    