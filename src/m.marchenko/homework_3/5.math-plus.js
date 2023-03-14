function add(num1, num2) {
    let array1 = num1.toString().split('');
    let array2 = num2.toString().split('');
    let array3 = [];
    let num = Math.abs(array1.length - array2.length);
    
    if (array1.length > array2.length) {
      for (let i = 0; i < num; i++) {
        array2.unshift(0);
      }
    }
    
    if (array1.length < array2.length) {
      for (let i = 0; i < num; i++) {
        array1.unshift(0);
      }
    }
    
    for (let i = 0; i < array1.length; i++) {
        array3.push(Number(array1[i]) + Number(array2[i]));
    }
    
    return Number(array3.join(''))
  }

  console.log(add(49999, 49999));