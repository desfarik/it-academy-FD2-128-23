function calculate(a, b, c) {
    const firstArr = [20, 15, 25, 30, 8];
    const secondArr = [25, 35, 40, 8, 4, 5, 8, 6];
    const result = [];
    let length;

    if (firstArr.length >= secondArr.length) {
        length = firstArr.length;
    } else {
        length = secondArr.length;
    }
    for (var i = 0; i < length; i++) {
        // Проверяем что элементы есть, либо заменяем их нулями.
        const a = firstArr[i] === undefined ? 0 : firstArr[i];
        const b = secondArr[i] === undefined ? 0 : secondArr[i];
        result.push(a + b);
    }
    console.log(result);
}
calculate()