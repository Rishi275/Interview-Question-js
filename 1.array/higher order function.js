
let SuareTheArray = (arr, func) => {  //higher order function is here
    let result = arr.map(func);
    return result;  // Returning the new array with squared values.  // This is a synchronous function as map() is a built-in JavaScript function.
    
}

let square = (e)=>{
  return e*e;
}
let addition = (xx)=>{
    return xx+xx;
}

console.log(SuareTheArray([1,2,3,4,5] ,addition))