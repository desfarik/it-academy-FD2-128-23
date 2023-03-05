function pow(n, e) {
    let number = 1;
    while (e > 0) {
        number = number * n;
        e--
    }
    return number
}
console.log(pow(5, 3))