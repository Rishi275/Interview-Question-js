function occurence(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {   // Check if the Element Exists in the Object
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

console.log(occurence([1, 2, 3, 3, 4, 4, 6, 7, 8, 8, 9]))