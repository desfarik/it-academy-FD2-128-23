function rgb(r, g, b){
  function toHex(d) {
    if (d > 255) return 'FF';
    else if (d < 0) return '00';
    else {
     return d.toString(16).padStart(2, '0').toUpperCase();
    }
  }
  return toHex(r) + toHex(g) + toHex(b);
}

rgb(173,255,47);