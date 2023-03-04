function parseFloat (str) {
    const digits = '0123456789.'
    let resultNum = ''
    for (let i=0; i<str.length; i++) {
      let symb = str[i]
      if (digits.includes(symb)) {
        resultNum +=symb
      } else { 
        break 
    }
  
    }
    return resultNum==="" ? NaN : +resultNum
  }


console.log(parseFloat('234.23px'))
console.log(parseFloat('234.34.234 jhh'))
console.log(parseFloat('fgh234 jhh'))
