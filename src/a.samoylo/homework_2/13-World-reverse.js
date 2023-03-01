function reverseWords(str) {
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ');
};