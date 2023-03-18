function rgb(r, g, b) {
  return getHex(r) + getHex(g) + getHex(b);

  function getHex(num) {
    if (num < 0) {
      num = 0;
    }
    if (num > 255) {
      num = 255;
    }
    let hex = num.toString(16).toUpperCase();

    return hex.length == 1 ? "0" + hex : hex;
  }
}



console.log(rgb(200,100,0));