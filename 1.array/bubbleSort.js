let array = [5,3,6,2,7,8,2,7,2,9,4,2,6,1,7,0,3]

let sortedArray = (array)=>{
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]>=array[j]){
                let temp = array[j];
                array[j]=array[i];
                array[i]=temp
            }
        }
     
    }
    return array;
}
let newSortedArray = sortedArray(array).join(" ")
console.log("Sorted Array: ",newSortedArray)

// ------------------------------------

let duplicate = [];
let FindDuplicacy = (newSortedArray)=>{
    for (let i = 0; i < newSortedArray.length; i++) {
        for (let j = i+1; j < newSortedArray.length; j++) {
            
           if(newSortedArray[i]===newSortedArray[j]){
             if(duplicate.indexOf(newSortedArray[i])===-1){
                duplicate.push(newSortedArray[i])
             }
           } 
        }  
    }
    return duplicate;
}

console.log("duplicate Element:",FindDuplicacy(newSortedArray).join(" "));