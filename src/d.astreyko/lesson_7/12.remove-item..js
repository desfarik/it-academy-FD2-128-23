function removeItem (array, index) {
  // const left = array.slice(0, index)
  // const right = array.slice(index+1)
  // console.log(left, right)
  // return [...left, ...right]
  ///---------------
  //array.splice(index, 1)
  //return array
  ///____________
  let spliced = []
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      spliced.push(array[i])
    }
  } return spliced
}

console.log(removeItem([1,2,3,4,5],1))

