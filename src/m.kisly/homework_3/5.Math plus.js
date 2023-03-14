function add(a, b) {
    let s = ""
    while (a + b) {
        s = a % 10 + b % 10 + s
        a = a / 10 | 0
        b = b / 10 | 0
    }
    return +s
}

console.log(add(2, 11));        //13
console.log(add(0, 1));         //1
console.log(add(0, 0));         //0
console.log(add(16, 18));       //214
console.log(add(26, 39));       //515
console.log(add(122, 81));      //1103
console.log(add(1222, 30277));  //31499
console.log(add(1236, 30977));  //31111013
console.log(add(38810, 1383));  //391193
console.log(add(49999, 49999)); //818181818