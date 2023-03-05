function parseNumber (str) {
    let first;
    let last;
    for (let i=0; i<str.length; i++){
        console.log(+str.slice('')[i])
    }
}

console.log(parseNumber('20.17d'))
console.log(parseNumber('22da'))
console.log(parseNumber('d22.17dak'))