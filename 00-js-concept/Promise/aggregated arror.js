// ------------
// aggregated error 



let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p4 rejected ");
    }, 2000);
});

let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p5 rejected");
    }, 1000);
});

let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p6 rejected");
    }, 3000);
});

Promise.any([p4, p5, p6]).then((res)=>{
    console.log("  ",res)
}).catch((err)=>{
    console.log(err) // when all promise are rejected then it show this error => AggregateError: No Promise in Promise.any was resolved


    console.log(err.errors) // we can find the array of error using this 
})