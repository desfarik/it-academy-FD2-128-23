function colourAssociation(array) {
  return array.map(([color, association]) => ({ [color]: association }));
}
console.log(
  colourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ])
);
