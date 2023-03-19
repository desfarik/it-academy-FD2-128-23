function colourAssociation(array) {
  return array.map(([key, value]) => ({ [key]: value }));
}
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))