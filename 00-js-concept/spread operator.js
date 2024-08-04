let arr = [1,2,3,4];
let arr2 = [5,6,7,8,9,10]

console.log([arr,arr2]);
//by using spread operator we can spread like this into single array
let arr3 = [...arr,...arr2]
console.log(arr3);
