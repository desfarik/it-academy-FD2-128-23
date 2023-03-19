function rgb(r, g, b) {
  let newArr = [r, g, b];
  let rgbR = r.toString(16);
  let rgbG = g.toString(16);
  let rgbB = b.toString(16);
  let rgbArray = [rgbR, rgbG, rgbB];
  let result = [];
  for (let index = 0; index < rgbArray.length; index++) {
    for (let index = 0; index < newArr.length; index++) {
      if (newArr[index] < 0) {
        rgbArray[index] = '00';
      } else if (newArr[index] > 255) {
        rgbArray[index] = 'ff';
      }
      result.push(rgbArray[index].padStart(2, '0'));
    }
    return result.join('').toUpperCase();
  }
}

console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(0, 0, 0));
console.log(rgb(132, 9, 157));
console.log(rgb(155, 11, 244));
