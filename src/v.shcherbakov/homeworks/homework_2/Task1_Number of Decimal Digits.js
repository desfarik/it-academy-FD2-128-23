function digits(n) {
    let i = 1;
    while (n > 10) {
        n = n / 10;
        i++;

    }
    // return i;
    console.log(i);
}
//
//     for (let i = 1; i <= n; i++){
//         let z = n / 10;
//         if ( z < 10) {
//         break
//             return i
//         }
//         else {
//             n=z;
//         }
//
//         console.log(i);
//     }
// }
digits(9876543210)