function missingWord(nums, str) {
    let result = '';
    const arrStr = str.split(' ').join('');
    const numSort = nums.sort((x, y) => x - y);
    for (let i of numSort) {
        let symbol = arrStr[i];
        if (symbol === undefined) {
            result = 'No mission today';
        } else {
            result += symbol.toLowerCase();
        }
    }
    return result;
}

console.log(
    missingWord([31, 29, 9], "The quick brown fox jumps over the lazy dog")
);