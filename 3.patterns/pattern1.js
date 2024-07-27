
/* q1  

   1 2 3 4 5         
1  * j<=1
2  * * j<=2
3  * * * j<=3
4  * * * * j<=4
5  * * * * * j<=5

*/
// ----------------------------------------------------



//string concatenation
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        if (j <= i) {
            row = row + "*";
        }
        else {
            row = row +"*";
        }
    }
    console.log(row);
}


