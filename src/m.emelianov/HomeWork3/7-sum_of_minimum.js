function sumOfMinimums(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++){
        let symbol = arr[i];
        let min = symbol[0]
        for (let q = 1; q < symbol.length; q++){
            if (symbol[q] < min) {
                min = symbol[q];
              }
            }
        // вместо цикла выше symbol.sort((a, b) => a - b)[0];   
        newArray.push(+min)
    }
    return newArray.reduce((a,b)=>a+b)
    
    }

    
  

  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
  
  console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))
  console.log(sumOfMinimums([[111, 55, 102, 135, 36, 86, 118, 38], [34, 150, 77, 38, 103, 72, 92, 75], [87, 97, 89, 62, 119, 11, 19, 93], [47, 126, 61, 124, 132, 74, 119, 117], [30, 104, 1, 115, 17, 99, 21, 6], [16, 45, 59, 17, 118, 139, 4, 79], [34, 3, 128, 13, 67, 41, 11, 39], [7, 129, 72, 137, 41, 111, 105, 95]]))
  console.log(sumOfMinimums([[7, 9, 8, 6, 2]]))