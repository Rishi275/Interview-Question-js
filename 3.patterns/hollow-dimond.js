/*


* 
* * 
*   * 
*     * 
* * * * * 
j==1||j==i ||i==5

// ------------------------------------------
 123456789
1    *
2   * *
3  *   *
4 *     *
5*       *
  *     *
   *   *
    * *
     *
*/

let n = 5; 
let k = 0;
for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";
    for (let j = 1; j <= 2 * n - 1; j++) 
        row += (j == n - k || j == n + k) ? "*" :" ";
    console.log(row);
    k = (i < n) ? k + 1 : k - 1;
}

// 2nd solution using array 
// k = 0;
// for(i = 1; i <= 9; i++){
//     i <= 5 ? k++ : k--;
//     let row = "";
//     for(j = 1; j <= 9; j++){
//         if(j == (6-k) || j == (4+k) ){
//             row = row+ "*";
//         }
//         else{
//             row = row+ " ";
//         }
//     }
//     console.log(row);
//  }