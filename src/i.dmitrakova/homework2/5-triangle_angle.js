function calcCorner(angle1, angle2){
    if(angle1 <= 0 || angle1 > 180 || 
        angle2 <= 0 || angle2 > 180){
            alert("Введите корректные значения")
    }
    return 180 - angle1 - angle2;
}
alert(calcCorner(60, 60))