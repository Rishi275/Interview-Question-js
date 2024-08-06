//map ,filter,reduce

// 1. there arguments , they are arrays functions
// map - takes only three argument value,index,and actual array - it can filter as well as can manipulate array values
// fliter - takes only three argument value,index,and actual array - it filter the array one some condition
let array = [1, 2, 3,4, 5];
array.map((value, i, arr) => {
    value = value + 2;
    console.log(value); //manupulated
})

array.filter((value, i, arr) => {
    return value % 2 === 0; //filter the even numbers
})


 array.reduce((prev,value, i, arr) => {
   console.log(prev,value,i,arr); //3 1 0 [ 1, 2, 3, 4, 5 ]
},3)

let sum = array.reduce((prev,value, i, arr) => {
    return prev + value; //sum of all numbers
},3)

console.log(sum); //


//Q1. create custom map function

Array.prototype.customMap = (callback) => {
    let result = [];
    for(let i = 0; i <this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

array.customMap((value, i, arr) => {
    value = value + 2;
    console.log(value); //manupulated
})