
// method 1

// let arr = [4, 16, 10, 3, 8, 12, 10, 21, 11, 13, 19, 2, 7, 5, 8,4,4,4];
// let duplicate = [];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             if(!duplicate.includes(arr[i])){
//                 duplicate.push(arr[i]);
//             }
//         }
//     }
// }
// console.log(duplicate)


array = [4, 16, 10, 3, 8, 12, 10, 21, 11, 13, 19, 2, 7, 5, 8,4,4,4];
let duplicate = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        
       if(array[i]===array[j]){
         if(duplicate.indexOf(array[i])===-1){
            duplicate.push(array[i])
         }
       } 
    }  
}
console.log(duplicate);








// // method 3

// let arr = [4, 16, 10, 3, 8, 12, 10, 21, 11, 13, 19, 2, 7, 5, 8, 8];

// let duplicate = arr.filter((val, index, self) => {
//     return self.indexOf(val) !== index;
// })
// console.log(duplicate)