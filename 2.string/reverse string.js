function reverse(str) {
    // Initialize an empty string to hold the reversed string
    let reversedStr = '';
    
    // Loop through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        // Append each character to the reversed string
        reversedStr += str[i];
        console.log(str[i])
    }
    
    return reversedStr;
}

// Example usage:
let inputString = "rishi maurya";
let reversedString = reverse(inputString);
console.log(reversedString); // Output: "ayruam ihsir"
