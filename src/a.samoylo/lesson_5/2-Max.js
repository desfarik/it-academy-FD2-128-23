function max(a, b , c) {
    return a>b ? a>c ? a : c : b>c ? b : c
}
console.log(max(10, 60, 50))