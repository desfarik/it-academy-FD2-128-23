function finalGrade(exam, projects) {
    let final = 0;

    if (exam > 90 || projects > 10) {
        final = 100;  
    }

    else if 
        (exam > 75 && projects >= 5) {
        final = 90;
    }

    else if 
        (exam > 50 && projects >= 2) {
        final = 75;  
    }
        
    else {
        final = 0;  
    }

    return final; 
}

console.log(finalGrade(90, 12));
console.log(finalGrade(76, 7));
console.log(finalGrade(53, 3));
console.log(finalGrade(20, 1));