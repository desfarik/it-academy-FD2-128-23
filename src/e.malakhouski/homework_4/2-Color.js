function colourAssociation(array){
    let result = array.map(item => ({[item[0]]:item[1]}));
    return result;
}


console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));