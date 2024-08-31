//async await are use the handle the promises


// initialisation async function 

async function getData0() {
    return "Rishi";   // it get automatically wrapped into a promise 
}

console.log(getData0());   //output=>  Promise { 'Rishi' }
let p0 = getData0();

p0.then((res)=>{
    console.log(res);  // output=>  Rishi
})




// -----------------2-------------------------
// definig promise explicitly

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Rishi");
    }, 2000);
});
async function getData() {
    return promise;   // it get automatically wrapped into a promise 
}

let p = getData();
p.then((res) => {
    console.log(res);
})

// -------------------------------3 await-------------------