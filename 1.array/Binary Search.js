


function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(left + ((left + right) / 2));

    console.log(arr[mid]);
}
BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)
