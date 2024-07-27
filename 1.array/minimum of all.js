function min(arr) {
    if (arr.length === 0) return null; // Return null or any other value to signify empty array
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) { // Start from 1 since minValue is initially arr[0]
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

let array = [5, 7, 4, 91, 92, 40, 1, 43, 6]; // Removed the empty element
console.log(min(array)); // Output should be 1, the smallest value
