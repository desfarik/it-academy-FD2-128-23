function finalGrade(exam, progect){
    if(exam > 90 && progect > 10){
        return 100;
    } else if (exam > 75 && progect >= 5){
        return 90;
    } else if (exam > 50 && progect >= 2){
        return 75;
    } return 0;
}
alert(finalGrade(52, 3))