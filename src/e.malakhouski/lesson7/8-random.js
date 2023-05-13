function generateRandom(size, from, to) {
const values = [...Array(size)].map((_, i) => i);
const result = [...Array(to)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0]);
}

console.log(generateRandom(10, 2, 5));
