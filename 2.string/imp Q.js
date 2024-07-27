// Write a function named mulWord that gets a string s and an integer n and returns the string n times with space between each.


let  mulWord = (s, n)=> {
    // Check if n is 0 or negative, return an empty string
    if (n <= 0) {
        return "";
    }

    // Initialize an array to hold the repeated strings
    let resultArray = [];

    // Loop n times to push the string s into the array
    for (let i = 0; i < n; i++) {
        resultArray.push(s);
    }

    // Join the array elements with a space separator and return the result
    return resultArray.join(" ");
}

// Example usage:
let inputString = "hello";
let repeatCount = 9;
console.log(mulWord(inputString, repeatCount)); // Output: "hello hello hello"
