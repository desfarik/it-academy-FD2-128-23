function isEmpty(object) {
  return Object.keys(object).length === 0
}
console.log(isEmpty({}))
console.log(isEmpty({'name': 10}))
