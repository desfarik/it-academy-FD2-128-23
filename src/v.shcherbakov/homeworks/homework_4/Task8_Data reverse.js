function dataReverse(data) {
    let temp = data.slice();
    let arrayNew = [];
    for (let i = 0; i < data.length / 8; i++) {
        arrayNew.push(temp.splice(0, 8));
    }
    return arrayNew.reverse().flat(Infinity);
}

console.log(dataReverse([1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));