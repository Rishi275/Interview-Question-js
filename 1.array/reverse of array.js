// // Reverse an array
// const arr = [1, 2, 3, 4, 5, 6, 7];
// let N = arr.length - 1;
// for(let i=0; i <= Math.floor(N/2); i++){
//       // Swap arr[i] with arr[N-i]
//     [ arr[i], arr[N-i] ] = [ arr[N-i], arr[i] ];
// }
// console.log(arr);


// method 2

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}

console.log(array);
