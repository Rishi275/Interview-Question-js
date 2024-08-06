
//Q1. create custom filter function

Array.prototype.customFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {   // this refers array arr.lentght
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let FindOdd = array.customFilter((val, i, arr) => {
    let odd = val % 2 == 1;
    return odd;
})
console.log(FindOdd);






















