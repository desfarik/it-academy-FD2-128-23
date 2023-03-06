function finalGrade (exam, projects) {    
    if (exam > 90 || projects > 10){
      final = 100
    }
    else if(exam > 75 && projects >=5){
      final = 90
    }
    else if(exam > 50 && projects >= 2){
      final = 75
    }
    else{
      final = 0
    }
    return final
}

console.log(finalGrade(70, 10))
