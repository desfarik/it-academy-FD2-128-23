function rentalCarCost(d) {
    let carCost = 40;
    if( d >= 7){
        return (d * carCost - 50);
    } else if( d >=3){
        return (d * carCost - 20)
    }else{
        return (d * carCost );
    }
}
