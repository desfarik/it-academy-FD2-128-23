function dataReverse(data) {
let res = [];
for (let i = 0; i < data.length; i+= 8) {
let arr = data.slice(i, i + 8);
res.push(arr);
}
    return res.reverse().flat();
}

  console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]));