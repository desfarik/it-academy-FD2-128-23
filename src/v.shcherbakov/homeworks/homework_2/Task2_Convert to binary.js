function toBinary(n){
    let num = n;
    let binar = (num % 2).toString();
    for (; num > 1; ){
        num = parseInt(num / 2);
        binar = (num % 2) + (binar);
    }
    console.log(binar);
}
toBinary(8)
