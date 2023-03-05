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

    return `${(consonants)}`.length
}

console.log(consonantCount('brightness'));
console.log(consonantCount('aagghaaaaa'));