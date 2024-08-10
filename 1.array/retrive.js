let retrieve = function (arr, n = 1) { // n=1 take default value 1 when not passed fromt called function
    if (n <= arr.length) {
        for (let i = 0; i <= n; i++) {
            // console.log(arr[i]);   //from front printing
            console.log(arr[arr.length -i-1]) // from back printing
        }
    } else {
        console.log("Index out of range");
    }
 
}

retrieve([1, 2, 3, 4, , 5, 6, 7, 8, 9], 3);