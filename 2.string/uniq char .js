
let str = "rishi maurya";
let unique = "";
for (let i = 0; i < str.length; i++) {
   let ch = str.charAt(i);
   if(str.indexOf(ch)==str.lastIndexOf(ch)){
    unique = unique+ch
   }
   console.log(str.lastIndexOf(ch))
}
console.log(unique.split("").join(" "))



/*-------------- working ----------------------


Iteration 1 (i=0):

ch = "r"
indexOf("r") = 0, lastIndexOf("r") = 10
str.lastIndexOf("r") is printed: 10
"r" is not unique.
Iteration 2 (i=1):

ch = "i"
indexOf("i") = 1, lastIndexOf("i") = 3
str.lastIndexOf("i") is printed: 3
"i" is not unique.
Iteration 3 (i=2):

ch = "s"
indexOf("s") = 2, lastIndexOf("s") = 2
str.lastIndexOf("s") is printed: 2
"s" is unique, added to unique: unique = "s"
Iteration 4 (i=3):

ch = "h"
indexOf("h") = 4, lastIndexOf("h") = 4
str.lastIndexOf("h") is printed: 4
"h" is unique, added to unique: unique = "sh"
Iteration 5 (i=4):

ch = "i"
indexOf("i") = 1, lastIndexOf("i") = 3
str.lastIndexOf("i") is printed: 3
"i" is not unique.
Iteration 6 (i=5):

ch = " "
indexOf(" ") = 5, lastIndexOf(" ") = 5
str.lastIndexOf(" ") is printed: 5
" " is unique, added to unique: unique = "sh "
Iteration 7 (i=6):

ch = "m"
indexOf("m") = 6, lastIndexOf("m") = 6
str.lastIndexOf("m") is printed: 6
"m" is unique, added to unique: unique = "sh m"
Iteration 8 (i=7):

ch = "a"
indexOf("a") = 7, lastIndexOf("a") = 8
str.lastIndexOf("a") is printed: 8
"a" is not unique.
Iteration 9 (i=8):

ch = "u"
indexOf("u") = 9, lastIndexOf("u") = 9
str.lastIndexOf("u") is printed: 9
"u" is unique, added to unique: unique = "sh mu"
Iteration 10 (i=9):

ch = "r"
indexOf("r") = 0, lastIndexOf("r") = 10
str.lastIndexOf("r") is printed: 10
"r" is not unique.
Iteration 11 (i=10):

ch = "y"
indexOf("y") = 11, lastIndexOf("y") = 11
str.lastIndexOf("y") is printed: 11
"y" is unique, added to unique: unique = "sh muy"
Iteration 12 (i=11):

ch = "a"
indexOf("a") = 7, lastIndexOf("a") = 8
str.lastIndexOf("a") is printed: 8
"a" is not unique.
Final Output:

unique = "sh muy"
unique.split("").join(" ") results in "s h m u y"
The final output printed is "s h m u y"

*/