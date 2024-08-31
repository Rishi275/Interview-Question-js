//Q1. create custom map function

Array.prototype.customMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    } 
    return result;
}

let array = [1, 2, 3, 4, 5];
let newSum = array.customMap((value, i , arr) => {
    return value + 2;
});

console.log(newSum); // Output: [3, 4, 5, 6, 7]
