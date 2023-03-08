function round(num) {
    return num > 0 ? `${num}`.split('.')[1] < 5 ? 
    `${num}`.split('.')[0] : +`${num}`.split('.')[0] + 1 :
    `${num}`.split('.')[1] < 5 || `${num}`.split('.')[0] == 0 ? `${num}`.split('.')[0] : +`${num}`.split('.')[0] - 1;
};

console.log(round(12434.56666) === 12435);
console.log(round(2.9) === 3);
console.log(round(0) == 0);
console.log(round(-2.9) === -3);
console.log(round(2.5) === 3); // если .5 то округляю в большую сторону
console.log(round(0.1) == 0);