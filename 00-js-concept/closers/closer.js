/* uses of closore---
   1. Data Privacy and Encapsulation:  -Closures allow you to create private variables that cannot be accessed from outside the function. This is useful for encapsulating data and preventing it from being tampered with.
   2. Function Factories: Closures can be used to create functions with specific behaviors based on parameters passed to the outer function.
   3. Maintaining State: Closures are useful for maintaining state in a function over multiple invocations without using global variables.
   4. Callback Functions:Closures are often used in asynchronous programming, such as in callbacks, to maintain access to variables from an outer scope.
  */

//  -------------------------------------------------------------------------------
//  1. Data Privacy and Encapsulation:
// function createCounter() {
//     let count = 0; // Private variable

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// -----------------------------------------------------------------------------------------
function makefunc() {
    var privatName = "Rishi";
    function DisplayName(...nums) {
        console.log(privatName,nums);
        return DisplayName;
    }
    return DisplayName;
}

makefunc()(1,2,3,4,5);
