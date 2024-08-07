
// infinite curring 

function sum(a){
    return function(b){
            if(b){
                return sum(a + b);
            }
            return a;
        }
}

console.log(sum(1)(2)(3)(4)());


// First Call:

// javascript
// Copy code
// sum(1)
// sum(1) returns a function that takes b as an argument.
// At this point, a is 1.
// Second Call:

// javascript
// Copy code
// sum(1)(2)
// The returned function is now called with b being 2.
// Inside this function, if (b) evaluates to true because b is 2.
// sum(a + b) is called with a now being 1 + 2 = 3.
// So sum(1)(2) is effectively sum(3) returning a new function.
// Third Call:

// javascript
// Copy code
// sum(1)(2)(3)
// The returned function is now called with b being 3.
// Inside this function, if (b) evaluates to true because b is 3.
// sum(a + b) is called with a now being 3 + 3 = 6.
// So sum(1)(2)(3) is effectively sum(6) returning a new function.
// Fourth Call:

// javascript
// Copy code
// sum(1)(2)(3)(4)
// The returned function is now called with b being 4.
// Inside this function, if (b) evaluates to true because b is 4.
// sum(a + b) is called with a now being 6 + 4 = 10.
// So sum(1)(2)(3)(4) is effectively sum(10) returning a new function.
// Final Call (with no argument):

// javascript
// Copy code
// sum(1)(2)(3)(4)()
// The returned function is now called with b being undefined.
// Inside this function, if (b) evaluates to false because b is undefined.
// The function returns a, which is 10.
// Let's put all these steps together:

// javascript
// Copy code
// console.log(sum(1)(2)(3)(4)()); // Output: 10
// sum(1) returns a function where a = 1.
// sum(1)(2) returns a function where a = 3 (1 + 2).
// sum(1)(2)(3) returns a function where a = 6 (3 + 3).
// sum(1)(2)(3)(4) returns a function where a = 10 (6 + 4).
// sum(1)(2)(3)(4)() returns 10 because b is undefined and a = 10.
