function getDecimal(n){
    if (n !== isNaN(n)){
        if (n <0){
            n = n*-1;
        }
        n = n - Math.trunc(n);
    }
    return n; 
}

console.log(getDecimal(-1.245));