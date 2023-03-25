function rgb(r, g, b){
    function hex(color) {
      if (color < 0) {
        return "00";
      } else if (color > 255) {
        return "FF";
      }
      return color.toString(16).padStart(2, 0).toUpperCase();
    }
    return hex(r) + hex(g) + hex(b);
}
console.log(rgb(300,255,255))