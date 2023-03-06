function consonantCount(str) {
    let numbers = 0;
    str.split('').map(el => 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('').includes(el) ? numbers++ : numbers += 0);
    return numbers;
};

console.log(consonantCount('') === 0);
console.log(consonantCount('aeiouAEIOU') === 0);
console.log(consonantCount('aaa') === 0);
console.log(consonantCount('bcdfghjklmnpqrstvwxyz') === 21);
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ') === 42);
console.log(consonantCount('y') === 1);
console.log(consonantCount('Y') === 1);
console.log(consonantCount('01234567890_') === 0);
console.log(consonantCount(' ^&$#') === 0);
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#') === 42);