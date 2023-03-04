function consonantCount(str) {
    const letters = 'bcdfghjklmnpqrstvwxyz';
    let consonants = '';
    str = str.toLowerCase().split('');

    for (let i=0; i<str.length; i++) {
        let count = str[i]
        if (letters.includes(count)) {
            consonants += count
        }
    }

    return String(consonants).length
}

console.log(consonantCount('H__##__omeW__**000111__orK__////'));
console.log(consonantCount('1B2b3__B   4   b     5***b aouoauo 6 b'));