

// Write a function named remove that gets a string and an integer and returns the string without a letter in the index corresponding to the integer.


// let removeInteger = (str) => {
//     let onlyLetter = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " " || isNaN(str[i])) {
//             onlyLetter += str[i];
//         }

//     }
//     return onlyLetter
// }
// let string = "rishi275"
// console.log(removeInteger(string))


// also when want to print both in array ------------------------------


    let str = "rishi275"
    let onlyLetter = "";
    let onlyinteger = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || isNaN(str[i])) {
            onlyLetter += str[i];
        }
        else {
            onlyinteger = onlyinteger + str[i]
        }

    }
    console.log(onlyinteger.split(""))
    console.log(onlyLetter.split(""))






/*
str = "rishi275"
onlyLetter = "" (empty string)
Iteration 1 (i=0):

str[i] = "r"
isNaN(str[i]) = true (since "r" is not a number)
onlyLetter += "r"
onlyLetter = "r"
Iteration 2 (i=1):

str[i] = "i"
isNaN(str[i]) = true (since "i" is not a number)
onlyLetter += "i"
onlyLetter = "ri"
Iteration 3 (i=2):

str[i] = "s"
isNaN(str[i]) = true (since "s" is not a number)
onlyLetter += "s"
onlyLetter = "ris"
Iteration 4 (i=3):

str[i] = "h"
isNaN(str[i]) = true (since "h" is not a number)
onlyLetter += "h"
onlyLetter = "rish"
Iteration 5 (i=4):

str[i] = "i"
isNaN(str[i]) = true (since "i" is not a number)
onlyLetter += "i"
onlyLetter = "rishi"
Iteration 6 (i=5):

str[i] = "2"
isNaN(str[i]) = false (since "2" is a number)
onlyLetter remains "rishi"
Iteration 7 (i=6):

str[i] = "7"
isNaN(str[i]) = false (since "7" is a number)
onlyLetter remains "rishi"
Iteration 8 (i=7):

str[i] = "5"
isNaN(str[i]) = false (since "5" is a number)
onlyLetter remains "rishi"
Final Result:

onlyLetter = "rishi"
The function returns "rishi".
The final output printed to the console is:
*/