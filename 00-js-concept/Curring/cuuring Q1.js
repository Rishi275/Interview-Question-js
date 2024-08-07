// do airthmetic operation using curring
function arithmetic(operation) {
    return function (a) {
        return function (b) {
            if (operation === "add") {
                return a + b;
            } else if (operation === "sub") {
                return a - b;
            } else if (operation === "mult") {
                return a * b;
            } else if (operation === "div") {
                return a / b;
            } else {
                return "Invalid operation";
            }
        }
    }
}

console.log(arithmetic("add")(5)(10)); // Outputs: 15
console.log(arithmetic("mult")(5)(10)); // Outputs: 15
console.log(arithmetic("div")(5)(10)); // Outputs: 15


//also
let multiplication = arithmetic("mult")
console.log(multiplication(3)(15));//closere concept