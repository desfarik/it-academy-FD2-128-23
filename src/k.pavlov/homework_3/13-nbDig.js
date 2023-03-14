function nbDig(n, d) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        array.push(i ** 2);
    }
    return array.join('').split('').filter(item => item === `${d}`).length
}


console.log(nbDig(10, 1))
console.log(nbDig(55, 5))