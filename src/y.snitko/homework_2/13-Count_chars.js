function consonantCount(str) {
    return(str.replace(/[(aeuio)(\s)(\d)(:;()@&-/.,?!_\|~#^*&$+)]/gi, '').split('').length);
}

console.log(consonantCount('hello world'));
console.log(consonantCount('j'));
console.log(consonantCount('o'));
