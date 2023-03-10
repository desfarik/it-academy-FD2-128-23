function add(num1, num2) {
    let temp = 0;
    if (num2 > num1) {
        temp = num2;
        num2 = num1;
        num1 = temp;
    }
    num1 = '' + num1;
    num2 = '' + num2;
    num1 = num1.split('');
    num2 = num2.split('');
    let firstArr = num1;
    let secondArr = num2;
    let result = [];
    let length=0;

    if (firstArr.length >= secondArr.length) {
        length = firstArr.length;
    } else {
        length = secondArr.length;
    }
    for (let i = 0; i < length; i++) {

        const a = firstArr[i] === undefined ? 0 : firstArr[i];
        const b = secondArr[i] === undefined ? 0 : secondArr[i];

        result.push(Number(a) + Number(b));
    }


    return result.join(' ');
}

console.log(add(918, 1218));
