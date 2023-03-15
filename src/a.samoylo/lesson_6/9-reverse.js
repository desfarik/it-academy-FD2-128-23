function reverse(array) {
    let arr = [];
    for (let i = -1; i < -array.length; i--) {
        arr[i] = array[i]
    }
    return arr;
}

console.log(reverse([1,2,3,4,5,6]))