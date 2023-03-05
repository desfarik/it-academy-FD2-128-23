function finalGrade (exam, projects) {
   // final grade
  if (exam > 90 || projects > 10){
    return(100);
  } else if(exam > 75 && projects >= 5){
    return(90);
  }else if(exam > 50  && projects >= 2){
    return(75);
  }else {
    return(0)
  }
}

console.log(finalGrade(90, 11))
console.log(finalGrade(0, 11))
console.log(finalGrade(76, 5))
console.log(finalGrade(75, 4))
console.log(finalGrade(50, 3))
console.log(finalGrade(50, 11))
