function disemvowel(str) {
    return str.split('').map(el => 'euioaEUIOA'.split('').includes(el)? '' : el).join('');
};