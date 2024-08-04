// promise is like doing some task if happens according to promise than 
let news = async () => {
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a787227847104588bbf3d69917d4398c&page1&pageSize=`4');
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



