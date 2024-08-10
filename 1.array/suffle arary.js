function Suffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        // [arr[i], arr[j]] = [arr[j], arr[i]];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

console.log(Suffle([1, 2, 3, 4, 5, 6, 7, 8]))

