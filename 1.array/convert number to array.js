
let convert = (number) => {
    return number.toString().split("").map((e)=>{
        return parseInt(e)
    });
}

let num = 1234;
console.log(convert(num));  // Output: [1, 2, 3, 4]
