


// difference between arrow and normal function


// 1. syntax
//  normal function
   let normalFunction =   function add(a, b) {
        return a + b;
    }
    //  normal function
    let arrowFunction = (a,b)=>a+b

// ---------------------------------------------------------------

//2 . arguments keywords

   let normalFunction1 = function(){
     console.log(arguments) // argument is pre defined keyword
   }
   normalFunction1(1,2,3)

   let arrowFunction1 = ()=> {
     console.log();   // it dont have predefined keword "arguments"
   }
   arrowFunction1(1,2,3)


//  3. this keyword  --------------------------------


 let obj = {
    name: "john",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    sayHelloArrow: ()=> {
        console.log(`Hello, my name is ${this.name}`);
    }
 }

 obj.sayHello(); // Hello, my name is john
 obj.sayHelloArrow(); // Hello, my name is undefined