
// ------------------------------------Promise Combinators----------------------------------------------------------------


/* they are 4 type ----   1. Promise.all([Promise])
                          2. Promise.race([Promise])
                          3. Promise.allSattled([Promise])
                          3. Promise.any([Promise])


*/

// ------------------------------------Promise Combinators end----------------------------------------------------------------


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolved");
    }, 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolved");
    }, 1000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p3 rejected");
    }, 3000);
});


Promise.all([p1, p2, p3]).then((res)=>{
    console.log("all",res)
}).catch((err)=>{
    console.error("allerr",err)
})

Promise.allSettled([p1, p2, p3]).then((res)=>{
    console.log("setteled",res)
}).catch((err)=>{
    console.error("settled",err)
})

Promise.race([p1, p2, p3]).then((res)=>{
    console.log("race",res)
}).catch((err)=>{
    console.error(err)
})

Promise.any([p1, p2, p3]).then((res)=>{
    console.log("any",res)
}).catch((err)=>{
    console.error(err)
})




