
/*
*********
 *******
  *****
   ***
    *
    * 
   ***
  ***** 
 *******  
*********

*/

let n = 5
let k = 0;
for (let i = 1; i < 2 * n; i++) {
    (i <= 5) ? k++ : k--;
    let line = "";
    for (let j = 1; j <= (2 * n) - 1; j++) {
        if (j >= k && j <= (2 * n) - k)
            line = line + "*";
        else
            line = line + " ";
    }
    console.log(line);
}






//     let n = 5

// for(let i=1; i<=n; i++){
//     let line = "";
//     for(let j=1; j<=(2*n)-1; j++){
//         if(j>=i && j<=(2*n)-i){
//           line = line+"*";
//         }else{
//             line = line+" ";
//         }
//     }
//     console.log(line);
// }

// for(let i=n; i>=1; i--){
//     let line = "";
//     for(let j=1; j<=(2*n)-1; j++){
//         if(j>=i && j<=(2*n)-i){
//           line = line+"*";
//         }else{
//             line = line+" ";
//         }
//     }
//     console.log(line);
// }