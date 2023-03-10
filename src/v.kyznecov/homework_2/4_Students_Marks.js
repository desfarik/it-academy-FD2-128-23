function finalGrade(exam, projects) {
  let averageMark = ""
  if ((exam >= 90 && exam <= 100) || projects > 10) {
    averageMark = 100
  } else if (exam >= 79 && exam <= 100 && projects >= 5) {
    averageMark = 90
  } else if (exam >= 50 && exam <= 100 && projects >= 2) {
    averageMark = 75
  } else {
    averageMark = 0
  }

  return averageMark
}
console.log(finalGrade(90, 3))
console.log(finalGrade(81, 5))
console.log(finalGrade(70, 6))
console.log(finalGrade(70, 0))
