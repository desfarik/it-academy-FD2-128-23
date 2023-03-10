function isPowerOfTwo(n) {
    for (let i = 1; i <= n; i *= 2) {
        if (i === n) return true;
    }
    return false;
}


console.log(isPowerOfTwo(4097));