function consonantCount(str) {
    let letterList = "qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM"
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      if (letterList.indexOf(str[i]) !== -1) {
        sum += 1
      }
    }
    return sum
  }
  console.log(consonantCount("qwerta"))
  console.log(consonantCount("kjgefo hhihh"))
  