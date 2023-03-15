function includes(str, symbol) {
  // return str.indexOf(symbol) !== -1
  for (let i = 0; i <str.length ; i++) {
    if (str[i]=== symbol){
      return true
    }
  }
  return false
}
