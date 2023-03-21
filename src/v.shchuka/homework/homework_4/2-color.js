function clourAssociation(array) {
  return array.map((innerArr) => Object.fromEntries([innerArr]));
}
console.log(
  clourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ])
);
