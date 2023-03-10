function min(array){
    array.sort()
    return array.at(-1)
}
console.log(min([23, 44, 55, 77, 32, 98,11]))