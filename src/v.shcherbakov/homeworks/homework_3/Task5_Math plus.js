function add(num1, num2) {
    let lengthNum;
    num1 = '' + num1;
    num2 = '' + num2;
    if (num1.length >= num2.length) {
        lengthNum = num1.length;
        num2=num2.padStart(lengthNum,0);
    } else {
        lengthNum = num2.length;
        num1=num1.padStart(lengthNum,0);
    }
    // console.log(num1,num2)
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


    return result.join('');

}


console.log(add(16, 18));
