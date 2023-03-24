let arr = [['white', 'goodness'], ['black', 'evil']];
function colourAssociation(array){
let result = [];
for (let i = 0; i < array.length; i++) {
result[i] = {[array[i][0]]: array[i][1]};
}
  return result;
}
console.log(colourAssociation(arr));