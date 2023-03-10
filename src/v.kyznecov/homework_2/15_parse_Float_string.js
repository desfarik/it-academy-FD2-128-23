function parseFloat(str) {
    let symbol = "1234567890."
    let result = ""
    for (let i = 0; i < str.length; i++) {
      if (symbol.includes(str[i])) {
        result += str[i]
      } else {
        break
      }
    }
    return result === "" ? Nan : +result
  }
  
  console.log(parseFloat("3.14pi"))
  