/*
Note - Variable initializations are not hoisted, only variable declarations are hoisted:
Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:



*/



hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

// --------------------------------------------------------------------------------------------------------------------
// Example 2:
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){ 
  console.log(" Hello world! ");
} 

// -------------------------------------------------------------------------------------------------------------------- 

// Example 3:
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething()

// -------------------------------------------------------------------------------------------------------------------- 
