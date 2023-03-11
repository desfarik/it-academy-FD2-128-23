function moveItem(array, from, to) {
    let temp = array[from]
    array[from] = array[to]
    array[to] = temp
    return array
}

console.log(moveItem([1,2,2,3], 0, 3))
