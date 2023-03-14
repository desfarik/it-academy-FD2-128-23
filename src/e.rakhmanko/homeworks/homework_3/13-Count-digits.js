function nbDig(n, d) {
    result = ''
    for (let index = 0; index <= n; index++) {
      result += index ** 2
    }
    return result.split(d).length - 1
  }
  console.log(nbDig(10, 1))