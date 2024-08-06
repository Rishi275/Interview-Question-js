
//closer Scope chaining

let a = 1;

function sum(b) {
    return function (c) {
        return function (d) {
            return function (e) {
                console.log(a + b + c + d + e);
            }

        }
    }
}

sum(2)(3)(4)(5);