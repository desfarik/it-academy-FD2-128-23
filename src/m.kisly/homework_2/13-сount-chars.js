function consonantCount(str) {
  let sogl = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  let counter = 0;
  for (let x = 0; x < str.length; x++) {
    if (sogl.indexOf(str[x]) !== -1) {
      counter += 1;
    }
  }
  return counter;
}
console.log(consonantCount(''));                                                                          //0
console.log(consonantCount('aeiouAEIOU'));                                                                //0
console.log(consonantCount('aaa'));                                                                       //0
console.log(consonantCount('bcdfghjklmnpqrstvwxyz'));                                                     //21
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));                                //42
console.log(consonantCount('y'));                                                                         //1
console.log(consonantCount('Y'));                                                                         //1
console.log(consonantCount('01234567890_'));                                                              //0
console.log(consonantCount(' ^&$#'));                                                                     //0
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')); //42