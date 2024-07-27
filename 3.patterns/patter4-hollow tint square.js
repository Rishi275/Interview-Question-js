/*
 123456789
1    *****
2   *   * 
3  *   *  
4 *   *   
5*****    

*/

// j >= (6 - i) && j <= 10 - i

for (i = 1; i <= 5; i++) {
    let row = "";
    for (j = 1; j <= 9; j++) {
        if (
            (j <= 10 - i && j >= (6 - i)) &&
            (i + j == 6 || i == 5 || i + j == 10 || i == 1)
        ) {
            row = row + "*";
        }
        else {
            row = row + " ";
        }

    }
    console.log(row);
}