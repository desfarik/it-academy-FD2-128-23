function join(array, separator) {
    let str = ""+array[0];
    for (let i = 1; i<array.length; i++) {
        str+= separator+array[i]
    }
    
    return str;
}

console.log(join([1, 2, 3, 4, 5, 22, 3242, -1, -5], ";"));