
let string = "hello world j j world"
let arrayString = string.split(" ");
let Duplicate = (arr) => {
    let duplicate = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (duplicate.indexOf(arr[i]) === -1) {
                    duplicate.push(arr[i])
                }
            }
        }
    }
    return duplicate;
}
console.log(Duplicate(arrayString));
console.log(Duplicate(arrayString).join(" ")); 