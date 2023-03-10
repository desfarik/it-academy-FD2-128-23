function disemvowel(str) {
    const vowels = 'aeuioEUIOA';
    return str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
    }

console.log(disemvowel('Twinkle, twinkle, little star, How I wonder what you are.'));
