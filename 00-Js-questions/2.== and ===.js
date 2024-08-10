// 4. Difference between “ == “ and “ === “ operators.
// Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

// Example:

var x = 2;
var y = "2";
console.log((x == y));  // Returns true since the value of both x and y is the same
console.log((x === y) );// Returns false since the typeof x is "number" and typeof y is "string"