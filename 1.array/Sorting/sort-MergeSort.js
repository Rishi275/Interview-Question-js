/*
Time Complexity
The time complexity of Merge Sort can be analyzed as follows:

Divide: The array is divided into two halves, which takes constant time, O(1).

Recur: The MergeSort function is called recursively on the two halves. This step has a time complexity of T(n/2) + T(n/2), which simplifies to 2T(n/2) for each level of recursion.

Merge: The merge step, where two sorted halves are combined, takes linear time, O(n), since every element in both halves must be considered.

 time complexity = T(n)=O(nlogn)
 space complexity = o(n)
*/


function MergeSort(arr = []) {
    if (arr.length <= 1) { 
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = MergeSort(arr.slice(0, mid)); // It gives you the left half of the array
    let right = MergeSort(arr.slice(mid));   // It gives you the right half of the array
    return merge(left, right);
}

function merge(left, right) {
    let sortArray = [];
    while (left.length && right.length) { 
        if (left[0] < right[0]) {
            sortArray.push(left.shift());
        } else {
            sortArray.push(right.shift());
        }
    }
    return [...sortArray, ...left, ...right];
}

console.log(MergeSort([3, 6, 6, 8, 3, 8, 9, 3, -2]));
