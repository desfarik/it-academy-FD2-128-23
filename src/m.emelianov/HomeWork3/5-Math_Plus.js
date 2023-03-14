function add(num1, num2) {
  let num1String = `${num1}`.split('').reverse();
  let num2String = `${num2}`.split('').reverse();
  const array = [];
  do{
     if (num1String.length > num2String.length){
        num2String.push('')
    }else if(num1String.length < num2String.length){
        num1String.push('')
    }
  }while (num1String.length !== num2String.length)
 
  for (let i = 0 ; i < num1String.length ; i++ ){
   array.push(+num1String[i] + +num2String[i])
  }
  return +array.reverse().join('')
}


console.log(add(582,34))
console.log(add(52,3584))
console.log(add(5822,34))
console.log(add(2,11))
console.log(add(16,18))


/// второй вариант без reverse

function add2(num1, num2) {
    num1 = `${num1}`.split('');
    num2 = `${num2}`.split('');
 let array = [];
 do{
    if (num1.length > num2.length){
       num2.unshift('')
   }else if(num1.length < num2.length){
       num1.unshift('')
   }
 }while (num1.length !== num2.length)

 for (let i = num1.length - 1; i >= 0 ; i-- ){
  array.unshift(+num1[i] + +num2[i])
 }
 return +array.join('')
}