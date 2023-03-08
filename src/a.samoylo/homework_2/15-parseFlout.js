function newParseFloat(str) {
    return isNaN(str[0]) ? NaN : +str.match(/(\d+\.\d+)/g) === 0 ? str.match(/\d+/) * 1 : str.match(/(\d+\.\d+)/g) * 1;
}

console.log(newParseFloat('563478.34534sdfsdf') === 563478.34534);
console.log(newParseFloat('2342') === 2342);
console.log(newParseFloat('23423.4324 sdfsdf') === 23423.4324);
console.log(isNaN(newParseFloat('gfd234234'))); // В parseFloat если str начинается с бука, отдаёт NaN
console.log(isNaN(newParseFloat('sdfsdf25.523'))); // В parseFloat если str начинается с бука, отдаёт NaN
console.log(newParseFloat('4324.234.234fdss') === 4324.234);