function reverseWord(str){

    str = str.split("").reverse().join("").split(" ").reverse().join(" ") ;
    return str;
}
alert(reverseWord('Sandwich with cheese'))