/*
Currying function in JavaScript
Currying is a technique in functional programming where a function is broken into a series of partially applied functions, each taking a single argument. This technique allows for more flexibility and reusability of the code. JavaScript allows us to create a currying function using closures. To make a currying function make a function that returns another function and that returning function uses the argument of the parent function too, so on running the parent function we get a new function which on run does some work with both the arguments.

*/


// its structure is like function channing

function sum(a){
    return function(b){
            return function(c){
                return function(d){
                    return a+b+c+d;
                }
            }
        }
}

console.log(sum(1)(2)(3)(4)); // it will return 10