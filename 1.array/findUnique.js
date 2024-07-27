let arr = [4, 16, 10, 3, 8, 12, 10, 21, 11, 13, 19, 2, 7, 5, 8, 8];

let unique = arr.filter((val, index, self) => {
    return self.indexOf(val) === index;
})
console.log(unique)