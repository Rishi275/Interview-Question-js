



// let ApiUrl = "https://api.github.com/users/Rishi275";


// async function HandlePromise(){
//    try{
//     let data = await fetch(ApiUrl);
//    let response = await data.json();
//    console.log(response);
//    }catch(err){
//     console.error("fetching failed:",err);
//    }
// }

// HandlePromise()


// --------------------- tradition way to handle the promise------------------------


let ApiUrl = "https://api.github.com/users/Rishi275";


async function HandlePromise() {
    let data = await fetch(ApiUrl);
    let response = await data.json();
    return response;
}

HandlePromise().then((res)=>{
    console.log("Fetching Successful");
    console.log(res);
    console.log("Fetching resoved");

    
}).catch(()=>{
    console.error("fetching failed may url incorrect:");
})