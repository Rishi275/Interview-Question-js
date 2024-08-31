
//Q1. create custom reduce function

Array.prototype.costomReduce = function(cb,accumulator){
    for(let i=0; i<this.length; i++){
        accumulator = cb(accumulator,this[i],i,this);
    }
    return accumulator;
    
}

let arr = [1,2,3,4,5];

 let result = arr.costomReduce((acc,i,arr)=>{
    return acc + i;
 },1);

 console.log(result);