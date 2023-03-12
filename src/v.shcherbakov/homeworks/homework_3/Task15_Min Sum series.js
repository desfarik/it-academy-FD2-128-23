function minSum(arr) {
    let sum = 0;
    let sortArr = arr.sort((x, y) => x - y);
    for (i = 0; i < sortArr.length / 2; i++) {
        let j = sortArr.length - (i + 1);
        sum += sortArr[i] * sortArr[j];
    }
    return sum;
}

console.log(minSum([9,2,8,7,5,3,4,0,6]))