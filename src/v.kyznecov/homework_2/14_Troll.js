function disemvowel(str) {
    let letterList = "euioaEUIOA"
    let result = ""
    for (let i = 0; i < str.length; i++) {
      let symbol = str.charAt(i)
      if (letterList.indexOf(symbol) == -1) {
        result += symbol
      }
    }
    return result
  }
  console.log(disemvowel("asasas"))
  console.log(disemvowel("AsasAs"))
  