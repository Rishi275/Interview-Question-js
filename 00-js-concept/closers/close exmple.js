// best use of closer

function CloserExa(num){
    return function (innerNum){
        return innerNum+num;
    }
}
 let addNum = CloserExa(5);

 console.log(addNum(2));
 console.log(addNum(10));







