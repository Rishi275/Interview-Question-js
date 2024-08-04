let arr = [1,2,3,4,5]

let AllArr = (...arrays)=>{ // rest operator when an parameter of function have spread operator that became rest operator
return arrays;

}
console.log(AllArr(...arr ,...[6,7,8],"hii" ,9,10))