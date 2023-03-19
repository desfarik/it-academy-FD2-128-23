function colourAssociation(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[i] = {[array[i][0]]: array[i][1]}
    }
    return result
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]))