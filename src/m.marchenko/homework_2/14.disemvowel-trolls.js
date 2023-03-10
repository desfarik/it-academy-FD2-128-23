function disemvowel(str) {
    const letters = 'aAeEiIoOuU'
    let cleanPhrase = '';
    str = str.split('');

    for (let i=0; i<str.length; i++) {
        let filter = str[i]
        if (letters.includes(filter)) {} 
        else cleanPhrase += filter
    } 
    return cleanPhrase
}

console.log(disemvowel('this is HOMEWORK 228 1337 ///// ****'))