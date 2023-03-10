function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
  }
console.log(finalGrade(100, 11));
console.log(finalGrade(76, 7));
console.log(finalGrade(51, 3));
