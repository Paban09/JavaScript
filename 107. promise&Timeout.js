
//promise and setTimeout

// i want to resolve/reject after 2 second

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value=true;
        // const value=false;

        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000);
    })
}

myPromise().then(()=>{
    console.log('resolve')})
    .catch(()=>{
        console.log('reject');
    })