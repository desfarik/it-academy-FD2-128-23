function consonantCount(str) {
    str = str.toLowerCase();
    const cons = 'qwrtypsdfghjklzxcvbnm'; 
    let count = 0;
    for (i = 0; i < str.length; i++){
        let symbol = str[i];
          if(cons.includes(symbol)){
          count++;
        }
    }
    return count;   
}
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'))

