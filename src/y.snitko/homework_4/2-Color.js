function colourAssociation(array) {
  let result = array.map((item) => (item = { [item[0]]: item[1] }));
  return result;
}

console.log(
  colourAssociation([
    ['red', 'energy'],
    ['yellow', 'creativity'],
    ['brown', 'friendly'],
    ['green', 'growth'],
  ])
);
