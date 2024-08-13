

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivote = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivote > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }

    }
    return [...QuickSort(left), pivote, ...QuickSort(right)]; //recursive call
}
console.log(QuickSort([2, -1, 3, 5, 7, 3, 8, 9, 2, 0, 4]))