function sortMyString(S) {

    ArrEven = [];
    ArrOdd = [];
    for (let i = 0; i < S.length; i++) {
        if (i % 2 == 0) {
            ArrEven.push(S[i].split(''));
        } else {
            ArrOdd.push(S[i].split(''));
        }
    }

    // your code here
    return S = ArrEven.join('') + ' '+ ArrOdd.join('');
}


console.log(sortMyString("YCOLUE'VREER"));