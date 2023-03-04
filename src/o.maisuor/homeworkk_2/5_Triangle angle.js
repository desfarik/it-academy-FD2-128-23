function otherAngle(a, b) {
  const thierdAng = (a + b )
  const c = ((a + b - 180) * -1)
  return c;
}

// function otherAngle(a, b) {
//   const thierdAngle = a + b;
//   const c = (180 -(a + b))
//   return(c);
// }
console.log(otherAngle(20, 80))
console.log(otherAngle(90, 12))
console.log(otherAngle(17, 30))
console.log(otherAngle(90, 90)) // why -0
