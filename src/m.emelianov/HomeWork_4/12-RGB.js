function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);

    function toHex(a){
        if(a < 0 ) {return "00";}
        if(a > 255 ) {return "FF";}
        let hex = a.toString(16).toUpperCase();
        return hex.length == 1 ? "0" + hex : hex;
    }
}
  console.log(rgb(200,100,0));