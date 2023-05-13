function moveItem(array, from, to) {
    let temp = array[from];
    array[from] = array[to];
    array[to] = temp;
    return array;
    
}


console.log(moveItem([1, 2, 3, 4, 5, 22, 3242, -1, -5], 0, 1));