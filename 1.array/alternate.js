let Alternate = (a1,a2)=>{
let newArray = [];
let maxOfTwoArray = Math.max(a1.length, a2.length)
console.log(maxOfTwoArray)
for (let i = 0; i <maxOfTwoArray; i++) {
    if(i<a1.length){
        newArray.push(a1[i]);
    }
    if(i<a2.length){
        newArray.push(a2[i]);
    }
}
return newArray
}

let arr1 = [1,3,5,2,7];
let arr2 = [4,6,7,8,9,10,11];

console.log(Alternate(arr1, arr2));

