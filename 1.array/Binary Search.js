function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;


    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let arr = [-2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = -2;

const result = BinarySearch(arr, target); // Output: 3
if (result !== -1) {
    console.log('Element found at index', result);
} else {
    console.log("Nhi Milla")
}
// ----------------------------------------------------------------------------------------------




// --------------------------------solution by methods--------------------------------------------------------------



// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let target = 4;
// // This will return an array with the target element if found
// let result = arr.filter(element => element === target);
// if (result.length > 0) {
//     console.log("found"); // The target was found in the array
// } else {
//     console.log("not found"); // The target was not found in the array
// }
