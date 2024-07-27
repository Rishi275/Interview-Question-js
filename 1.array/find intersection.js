

let Intersection = (arr1, arr2) => {
    let result = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                if(!result.includes(arr1[i])){
                    result.push(arr1[i]);
                }
            }
        }
    }
    return result;
    
}
let array1 = [1,2,2,5,7,6,8,9,9,44];
let array2 = [2,4,9,10,11,23,29,44,55,6,67,99]

console.log(Intersection(array1, array2));