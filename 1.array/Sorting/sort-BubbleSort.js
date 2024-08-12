/*bubble sort - it sort large element to the very end
   ----In Bubble Sort algorithm, 

. traverse from left and compare adjacent elements and the higher one is placed at right side. 
. In this way, the largest element is moved to the rightmost end at first. 
. This process is then continued to find the second largest and place it and so on until the data is sorted.



1. Time Complexity:
      Bubble Sort:
      Worst-case: O(n²)
      Best-case: O(n) (with an optimized version that stops if no swaps are made in a pass)
      Average-case: O(n²)

*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) { // every time iterarion will reduce

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([4, 2, 6, 0, 5, 6, 9, 2, 7]))