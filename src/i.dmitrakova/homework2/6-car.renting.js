
function calcDays(day){
    if(day >= 3 && day < 7){   
        return 40-(40*20)/100;
    } else if(day >= 7){
       
        return 40-(40*50)/100;
    } return 40;
}
alert(calcDays(3))