//  lexical scope example
/*In lexical scope, a function can access variables defined in its outer scopes. In your example, writeName can access fullName because of lexical scoping, as the variable fullName is defined in an outer scope (the global scope). This scoping rule is determined at the time the code is written, hence the term "lexical" (related to the lexical structure of the code).

*/


// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
console.log(profile())