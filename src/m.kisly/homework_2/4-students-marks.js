function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects > 4) return 90;
  if (exam > 50 && projects > 1) return 75;
  else
    return 0
}
console.log(finalGrade(100, 12)); //100
console.log(finalGrade(85, 5));   //90