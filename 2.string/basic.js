// function harshita(arr ,func ,func2 ){
//     let flag = 0;
//     if(flag==0){
//         return arr.map(func)
//     }
//     else{
//         return arr.map(func2)

//     }
// }

// let square = (x)=>{
//     return x*x
// }

// let addition = (x)=>{
//     return x+x
// }
// let array = [1,2,3,5,6];

// console.log("square of array", harshita(array,square))
// console.log("addition of array",harshita(array,addition))


// Primitive data types
let number = 42;
let string = "Hello";
let boolean = true;
let und;
let nll = null;
let symbol = Symbol("sym");
let bigInt = BigInt(12345678901234567890n);

// Non-primitive data types
let obj = { name: "John", age: 25 };
let arr = [1, 2, 3];
function greet() {
    console.log("Hello, world!");
}

// Accessing primitive types
console.log(number); // 42
console.log(string); // "Hello"
console.log(boolean); // true
console.log(und); // undefined
console.log(nll); // null
console.log(symbol); // Symbol(sym)
console.log(bigInt); // 12345678901234567890n

// Accessing non-primitive types
console.log(obj); // { name: "John", age: 25 }
console.log(arr); // [1, 2, 3]
greet(); // "Hello, world!"
