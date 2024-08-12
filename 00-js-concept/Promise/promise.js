// promise is like doing some task if happens according to promise than 


let news = async () => {
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a787227847104588bbf3d69917d4398c&page1&pageSize=`1');
     let  data = await response.json();
   console.log(data);
}


console.log("processing data...")
let promise = new Promise((resolve, reject)=>{
    let flag = true;
    if(flag===true){
       setTimeout(() => {
        resolve("Task completed successfully" , news());
       }, 3000);
    }else{
        reject("Task failed");
    }
   
});

promise.then((res)=>{
    console.log("Fetching Completed");
}).catch((err)=>{
   console.error("Fetching  failed")
})







// ------------------------------------Promise Chaining----------------------------------------------------------------

/*
// Example with simulated asynchronous operations using setTimeout

// Function that returns a promise resolving after a given time
let delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("hii"));
        }, ms)
    });
}

delay(1000)
    .then(() => {
        console.log('Step 1: Waited for 1 second');
        return delay(2000); // Return a promise to continue the chain
    })
    .then(() => {
        console.log('Step 2: Waited for another 2 seconds');
        return delay(3000);
    })
    .then(() => {
        console.log('Step 3: Waited for another 3 seconds');
        // This could return another promise or a value
        return 'Chain completed successfully';
    })
    .then(result => {
        result = "Love ❤️";
        console.log('Final Result:', result);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });

 
 */

// ------------------------------------Promise Combinators----------------------------------------------------------------


/* they are 4 type ----   1. Promise.all([Promise])
                          2. Promise.race([Promise])
                          3. Promise.allSattled([Promise])
                          3. Promise.any([Promise])


*/

// ------------------------------------Promise Combinators end----------------------------------------------------------------







