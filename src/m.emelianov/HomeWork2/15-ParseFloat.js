function parseFloat(str) {
    const digits = '1,2,3,4,5,6,7,8,9.';
    let number = '';
    for (let i = 0; i < str.length; i++){
        let symbol = str[i];
        if (digits.includes(symbol)){
            number += symbol;
        }else{
            break;
        }
    }
    return number === ' ' ? NaN : +number;
     
}
console.log(parseFloat('235.54 htrdfg'))
console.log(parseFloat('2fgdg35.54 4334htrdfg'))
console.log(parseFloat('25435.54455gfh htrdfg'))
console.log(parseFloat('235. htrdfg'))