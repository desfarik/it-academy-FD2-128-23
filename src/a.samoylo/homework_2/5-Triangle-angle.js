function otherAngle(a, b) {
    return 180 - a - b;
};

console.log(otherAngle(30, 60) === 90);
console.log(otherAngle(60, 60) === 60);
console.log(otherAngle(43, 78) === 59);
console.log(otherAngle(10, 20) === 150);