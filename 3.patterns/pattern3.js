/*
1 2 3 4 5 6 7 8 910 11 12
* * * * * * * * * * * *j>=7  
* * * * *     * * * * *j>=8
* * * *         * * * *j>=9
* * *             * * *j>=10
* *                 * *j>=11
*                     *j>=12
*                     *
* *                 * *
* * *             * * *
* * * *         * * * *
* * * * *     * * * * *
* * * * * * * * * * * *


*/

let k = 0;
for (let i = 1; i < 12; i++) {
    let row = "";
    (i <= 6) ? k++ : k--;
    for (let j = 1; j <= 12; j++) {
        if (j <= 7 - k || j >= 6 + k)
            row = row + "*";
        else
            row = row + " ";
    }
    console.log(row);
}


//  let n = 10;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= 2*n; j++) {
//         if (j<=(n+1)-i || j>=n+i ) {
//             row = row + "*";
//         }
//         else {
//             row = row +" ";
//         }
//     }
//     console.log(row);
// }

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= 2*n; j++) {
//         if (j<=(n+1)-i || j>=n+i ) {
//             row = row + "*";
//         }
//         else {
//             row = row +" ";
//         }
//     }
//     console.log(row);
// }

