function reverse (array) {
    let revArray = [];
    for (let i= array.length-1; i>=0; i--){
        revArray.push(array[i]);
    }
    return revArray;
}


console.log(reverse([1, 2, 3, 4, 5, 22, 3242, -1, -5]));
