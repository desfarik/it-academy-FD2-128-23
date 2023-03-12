function maxTriSum(numbers) {
    let array = numbers.sort((x, y) => y - x);
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 1);
            i--;
        }
    }
    return array.splice(0, 3).reduce((sum, num) => sum + num, 0);
}

console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]));