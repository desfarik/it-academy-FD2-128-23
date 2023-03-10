function removeSpaces(str){
    return str.replaceAll(' ', '');
}
alert(removeSpaces('red and white'))


/*another way */

function removeSpace(str){
    return str.split(' ').join('');
}