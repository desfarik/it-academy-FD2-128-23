function take(array,n) {
    let arrNew=[];
    for (let i = 0; i <n ; i++) {
        arrNew.push(array[i]);
    }
return arrNew;
}

console.log(take([1,5,3,4,5],2));