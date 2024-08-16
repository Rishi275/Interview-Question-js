//add alemente of array
// let array = [1, 2, 3, , 4, 5];

// function recursion(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }else {
//         return recursion(arr.slice(1)) + (arr[0] || 0);
//     }
// }
// console.log(recursion(array)); // Output: 15


// factorial 
function factorial(n) {
  if (n <= 0) {
    return -1;
  }
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(0)); // Output: 120


//reverse
