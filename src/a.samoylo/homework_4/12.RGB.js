function rgb(r, g, b){
    function HexElement(c) {
      let hex = c <0 ? Number('0').toString(16) : c>255 ? Number('255').toString(16) : c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
      return (HexElement(r) + HexElement(g) + HexElement(b)).toUpperCase();
  }
  //так как чисто цифры в строковом варианте ломали систему почему то, то макс и мин значение вынес в переменные