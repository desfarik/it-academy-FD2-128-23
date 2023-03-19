function colourAssociation(array) {
    let newArray = []
    for (let i = 0; i < array.length; ++i) {
        let object = {}
        object[array[i][0]] = array[i][1]
        newArray.push(object)
    }
    return newArray
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
console.log(colourAssociation([["red", "energy"], ["yellow", "creativity"], ["brown", "friendly"], ["green", "growth"]]))