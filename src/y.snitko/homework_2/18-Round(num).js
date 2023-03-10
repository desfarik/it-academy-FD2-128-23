function roundNum(num, float) {
    let floatNum = num.toFixed(float);
    let lastDigits = +floatNum.slice(-1);
    
        if (5 <= lastDigits && lastDigits <= 9) {
            floatNum =  Math.ceil(num);
        } 

        else if (0 <= lastDigits && lastDigits < 5){
            floatNum =  Math.floor(num);
        }
    
    return floatNum;
}

console.log(roundNum(10.72323, 1));
console.log(roundNum(2.334, 1))