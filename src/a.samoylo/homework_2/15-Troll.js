function disemvowel(str) {
    return str.split('').map(el => 'qeuioaQEUIOA'.split('').includes(el)? '' : el).join('');
};