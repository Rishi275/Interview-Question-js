//  @question 

//find output 
// console.log("start");
// let func = ()=>{
//    return new Promise((resolve, reject)=>{

//         console.log("1")
//          resolve("2");     // it is an async part so it  execute in the last
//         console.log("3")
//     })
// }

// func().then((res)=>{
//     console.log(res)
// })
// output = start 1 3 2


// -------------------------------Q.2------------------------------------------------
// console.log("start");
// let func1 = () => {
//     new Promise((resolve, reject) => {

//         console.log("1")
//         resolve("hii");     //it not going to execute becoz it requires "then" keyword
//         console.log("3")
//     })

// }
// func1()  //output is start 1 3


// -------------------------------Q.3--- from promise chaining---------------------------------------------
let func = (state) => {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve("success")
        } else {
            reject("error")
        }
    })
}

let promise = func(true);

promise.then((res) => {
    console.log(res)
    return func(false);
}).catch((err) => {
    console.log(err);
    return "error occured"
}).then((res) => {
    console.log(res)
    
})
