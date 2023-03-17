function add(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let arrMax = max.toString().split('')
    let arrMin = min.toString().padStart(arrMax.length, '0').split('')
    let res = [];
    for (let i = 0; i < arrMax.length; i++){
      res.push(+arrMax[i] + +arrMin[i])
    }
    return +res.join('');
  }
  console.log(  add(1029, 52))
  console.log(  add(652, 1234))
  console.log(  add(10, 52))
  