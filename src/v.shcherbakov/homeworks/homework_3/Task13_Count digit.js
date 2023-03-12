function nbDig(n, d) {
    let result = '';
    for (let i = 0; i <= n; i++) {
        result += Math.pow(i, 2);
    }
    return result.split(d).length - 1;
}

console.log(nbDig(12224, 8))