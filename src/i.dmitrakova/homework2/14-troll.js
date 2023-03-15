function removeLetter(str){
    str = str.replace(/[aeuioAEUIO]/gi, '')
    return str
}
alert(removeLetter('This website is for losers LOL!'))