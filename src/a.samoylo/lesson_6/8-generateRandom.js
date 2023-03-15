function generateRandom(size, from, to) {
    let massiv = [];
    for (let i = 0; i < size; i++) {
        massiv[i] = Math.random(from, to)
    }
    return massiv
}
console.log(generateRandom(10, 1, 10))