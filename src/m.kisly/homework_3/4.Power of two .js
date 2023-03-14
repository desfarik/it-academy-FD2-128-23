function isPowerOfTwo(n) {
    if (n === 1) {
        return true
    }

    if (n === 0) {
        return false
    }

    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(2))    //true
console.log(isPowerOfTwo(4096)) //true
console.log(isPowerOfTwo(5))    //false