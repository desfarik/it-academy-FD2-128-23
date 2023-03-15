function finalGrade (exam, projects) {
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects > 4 ? 90 : exam > 50 && projects > 1 ? 75 : 0
};

console.log(finalGrade(100, 12) === 100);
console.log(finalGrade(85, 5) === 90);
console.log(finalGrade(85, 4) === 75);
console.log(finalGrade(75, 3) === 75);
console.log(finalGrade(75, 2) === 75);
console.log(finalGrade(60, 1) === 0);