function rgb(red, green, blue) {
  return getNumToHex(red) + getNumToHex(green) + getNumToHex(blue);
  function getNumToHex(num) {
    let copyNum = num;
    if (num < 0) {
      copyNum = 0;
    } else if (num > 255) {
      copyNum = 255;
    }
    return copyNum.toString(16).padStart(2, 0).toUpperCase();
  }
}
console.log(rgb(173, 255, 47));
