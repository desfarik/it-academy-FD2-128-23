function consonantCount(str) {
    let numbers = 0;
    str.split('').map(el => 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('').includes(el)? numbers++ : numbers +=0);
    return numbers;
};