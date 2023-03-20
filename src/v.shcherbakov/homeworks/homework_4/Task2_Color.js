function colourAssociation(array) {
    let result = array.map(object => ({[object[0]]:object[1]}));
    return result;
}

console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]));