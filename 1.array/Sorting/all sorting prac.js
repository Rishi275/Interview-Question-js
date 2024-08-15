

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length-i; j++) {
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }

       } 

    }
    return arr;
}
console.log(bubbleSort([2,-1,4,7,5,9]));


function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minindex = i;
        for (let j = i + 1; j < arr.length - i; j++) {
            if (minindex > arr[j]) {
                minindex = j;
            }

        }
        if(minindex!=i){
            let temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }

    }
    return arr;
}
console.log(SelectionSort([2, -1, 4, 7, 5, 9]));


function quickSort(arr) {
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
    return [...quickSort(left), pivote, ...quickSort(right)]

}

console.log(quickSort([2, -1, 4, 7, 5, 9]));




function sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = sort(arr.slice(0, mid))
    let right = sort(arr.slice(mid))

    return merge(left, right);
}

function merge(left, right) {
    let newArr = [];
    while (left.length < right.length) {
        if (left[0] < right[0]) {
            newArr.push(left.shift());
        } else {
            newArr.push(right.shift());
        }
    }

    return [...newArr, ...left, ...right];
}
console.log(sort([2, -1, 4, 7, 5, 9]));