function parseFloat(string) {
    let digits = '0123456789.';
    let resultNum = '';
    for (let i = 0; i < string.length; i++) {
        if (digits.includes(string[i])) {
            resultNum += string[i];
        } else {
            break;
        }
    }
 return resultNum === '' ? NaN : +resultNum;
}
console.log(parseFloat('.15pi 9384tu'))