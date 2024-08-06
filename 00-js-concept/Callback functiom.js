// when a function is passed inside another function as an argument is called callback function

/*
let Square = (e)=>{
    return e*e;
 }

let Calculate = (Square)=>{
    console.log(Square(2))
}
Calculate(Square);


*/

// Callback function that checks if a number is even
let isEven = (num) => {
    return num % 2 === 0;
};

// Function that filters an array based on the callback function
let filterArray = (arr, callback) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using the callback function to filter the array
let evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


