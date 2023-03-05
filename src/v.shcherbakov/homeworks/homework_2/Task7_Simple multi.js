function simpleMultiplication(number) {
    let kata =number % 2 ;
    if (kata == 0){
        number = number * 8;
    }
    else if (kata == 1) {
        number = number * 9;
    }
    return number;
}