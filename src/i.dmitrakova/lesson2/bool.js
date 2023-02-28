const str = '40.9666666666px';

console.log(Boolean(str));
console.log(!!str);

//false
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log('-----');

console.log(Boolean('1'));
console.log(Boolean(-1));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(()=>{}));


