function filterEven(array) {
    array.forEach(function (item, index, arr) {

    })

    const evens = array.filter((item, index, arr) => {
        return item % 2 === 0
    })
    console.log(evens)

    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i])
        }
    }
    return array
}

console.log(filterEven([1,4,8,9]))