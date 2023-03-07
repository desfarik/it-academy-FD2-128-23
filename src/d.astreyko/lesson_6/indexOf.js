function indexOf (str,symb,pos=0){
  for (let i = pos; i <str.length ; i++) {
    if (str[i]=== symb){
      return i
    }
  }
  return -1;
}
function allIndexOf(str,symb,pos=0){
  const array = []
  for (let i = pos; i <str.length ; i++) {
    if (str[i]=== symb){
      array.push(i)
    }

  }return array
}
console.log(indexOf('user name','e',3))
console.log(allIndexOf('user name','e'))
