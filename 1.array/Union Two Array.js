
// union two arrays

function Union(arr1 = [], arr2 = []) {
    let unionArray = [...new Set(arr1.concat(arr2))];
    return unionArray;
}
console.log(Union([1, 2, 3, 4, 4, 5], [2, 5, 5, 7, 3, 3, 3]))




// ----------------------------------------------Second method to Union the array----------------------------------------------------------------------------------
let UnionTwoArray = (arr1, arr2) => {
    let unionArray = []; // Start with an empty array

    // Add elements from arr1 to unionArray
    for (let i = 0; i < arr1.length; i++) {
        if (!unionArray.includes(arr1[i])) {
            unionArray.push(arr1[i]);
        }
    }

    // Add elements from arr2 to unionArray
    for (let i = 0; i < arr2.length; i++) {
        if (!unionArray.includes(arr2[i])) {
            unionArray.push(arr2[i]);
        }
    }

    return unionArray;
}

console.log(UnionTwoArray([1, 2, 3, 4, 4, 5], [2, 5, 5, 7, 3, 3, 3]));
