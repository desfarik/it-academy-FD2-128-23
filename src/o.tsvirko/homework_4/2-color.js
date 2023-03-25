function colourAssociation(array) {
    let association = [];
    for (let key of array) {
        let colorPair = { [key[0]]: key[1] };
        association.push(colorPair);
      }
  return association;
}
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))