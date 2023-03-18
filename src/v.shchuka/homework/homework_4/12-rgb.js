function rgb(r, g, b) {
  return rgb16(r) + rgb16(g) + rgb16(b);
  function rgb16(color) {
    if (color < 0) {
      color = 0;
    } else if (color > 255) {
      color = 255;
    }
    return color.toString(16).padStart(2, 0).toUpperCase();
  }
}
console.log(rgb(173, 255, 47));
