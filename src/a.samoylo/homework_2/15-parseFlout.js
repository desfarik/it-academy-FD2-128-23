function newParseFloat(str) {
    return isNaN(str[0]) ? NaN : +str.match(/(\d+\.\d+)/g) === 0 ? str.match(/\d+/) * 1 : str.match(/(\d+\.\d+)/g) * 1;
}

console.log(newParseFloat('563478.34534sdfsdf'));
console.log(newParseFloat('2342'));
console.log(newParseFloat('23423.4324 sdfsdf'));
console.log(newParseFloat('gfd234234'));
console.log(newParseFloat('sdfsdf25.523'));
console.log(newParseFloat('4324.234.234fdss'));