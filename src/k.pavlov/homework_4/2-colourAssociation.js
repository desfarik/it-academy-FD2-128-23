function colourAssociation(array) {
    let result = [];
    for (const key in array) {
        result[key] = {[array[key][0]]: array[key][1]}
    }
    return result
}

console.log(colourAssociation([["white", "goodness"]]));



