// / await is use whenever we have to stop or hold the execution at any awaited line than untill taht awaited promise not get resolve next line is not going to execute

//ex


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolve successfully");
    },5000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolve successfully");
    },2000)
})


async function getData() {
    console.log("before await p1")
    let response = await p1;
    console.log(response);
    console.log("after await p1")

    let reponse2 = await p2; // it takes less time tahn promise p1 but execute later because of await =>it holds the execution for p1;
    
    console.log(reponse2); //output  //  before await p1
                                     //  after await p1
                                     //  p2 resolve successfully
                                     //  p1 resolve successfully

}
getData();