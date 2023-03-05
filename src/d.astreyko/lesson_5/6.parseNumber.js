function parseNumber (str) {
  const digits = '0123456789'
  let resultNum = ''
  for (let i=0; i<str.length; i++) {
    let symb = str[i]
    if (digits.includes(symb)) {
      resultNum +=symb
    } else { break }

  }
  return resultNum==="" ? NaN : +resultNum
}
console.log(parseNumber('234 jhh'))
console.log(parseNumber('234.34 jhh'))
console.log(parseNumber('fgh234 jhh'))

