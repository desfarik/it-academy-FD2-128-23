function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
     return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

finalGrade(91, 5);
finalGrade(34, 11);
finalGrade(77, 9);
finalGrade(55, 3);
finalGrade(77, 0);